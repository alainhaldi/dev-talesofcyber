import { Component, input, OnInit, signal } from '@angular/core';
import { LoggerService } from '../../../core/logger.service';
import { getNestedValue, pathToTopic } from '../../../topics.config';
import deJson from '../../../../../public/i18n/de.json';
import { BsProgressBarComponent } from '../../base-structures/bs-progress-bar/bs-progress-bar.component';
import { BsHeadingComponent } from '../../base-structures/bs-heading/bs-heading.component';
import { BsTextComponent } from '../../base-structures/bs-text/bs-text.component';
import { BsRiveComponent } from '../../base-structures/bs-rive/bs-rive.component';
import { BsLinkComponent } from '../../base-structures/bs-link/bs-link.component';

@Component({
  selector: 'app-cs-topic-story',
  imports: [
    BsProgressBarComponent,
    BsHeadingComponent,
    BsTextComponent,
    BsRiveComponent,
    BsLinkComponent,
  ],
  templateUrl: './cs-topic-story.component.html',
  styleUrl: './cs-topic-story.component.scss',
})
export class CsTopicStoryComponent implements OnInit {
  topicId = input.required<string>();
  pathToGlobalValues = signal('');
  pathToPage0 = signal('');
  pathToPages = signal('');
  currentPage = signal(0);
  currentPathToPage = signal('');

  // All pages inclunding page 0
  pagesArray: { key: string; value: any }[] = [];
  currentPageObjects: { key: string; type: string; value: any }[] = [];

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.pathToGlobalValues.set('topic_page.global.story_pages');
    this.pathToPage0.set(`${this.pathToGlobalValues()}.story`);
    this.pathToPages.set(`${pathToTopic}${this.topicId()}.story`);

    // Add all Pages into one Array
    const page0 = getNestedValue(deJson, this.pathToPage0());
    Object.entries(page0).forEach(([key, value]) => {
      this.pagesArray.push({ key, value });
    });

    const pages = getNestedValue(deJson, this.pathToPages());
    Object.entries(pages).forEach(([key, value]) => {
      this.pagesArray.push({ key, value });
    });

    this.logger.log('Count Story Pages: ' + this.pagesArray.length);
    this.logger.log(this.pagesArray);

    // Map with Type
    this.setCurrentPageArray();
    this.logger.log(this.currentPageObjects);
  }

  setCurrentPageArray() {
    const currentPageObj = this.pagesArray[this.currentPage()];
    this.logger.log(currentPageObj.value);
    if (!currentPageObj) return;

    // Set correct Path to Page
    if (this.currentPage() > 0) {
      this.currentPathToPage.set(
        `${this.pathToPages()}.page_${this.currentPage()}`
      );
    } else {
      this.currentPathToPage.set(`${this.pathToPage0()}.page_0`);
    }

    // add types
    this.currentPageObjects = Object.entries(currentPageObj.value).map(
      ([key, value]) => {
        const type = key.startsWith('bs_heading')
          ? 'heading'
          : key.startsWith('bs_text')
          ? 'text'
          : key.startsWith('bs_rive')
          ? 'rive'
          : key.startsWith('bs_link')
          ? 'link'
          : 'unknown';

        return { key, type, value };
      }
    );
  }
}
