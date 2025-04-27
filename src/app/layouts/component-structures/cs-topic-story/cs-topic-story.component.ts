import { Component, input, OnInit, signal } from '@angular/core';
import { LoggerService } from '../../../core/logger.service';
import { getNestedValue, pathToTopic } from '../../../topics.config';
import deJson from '../../../../../public/i18n/de.json';
import { BsProgressBarComponent } from '../../base-structures/bs-progress-bar/bs-progress-bar.component';
import { BsHeadingComponent } from '../../base-structures/bs-heading/bs-heading.component';
import { BsTextComponent } from '../../base-structures/bs-text/bs-text.component';
import { BsRiveComponent } from '../../base-structures/bs-rive/bs-rive.component';
import { BsLinkComponent } from '../../base-structures/bs-link/bs-link.component';
import { BsButtonComponent } from '../../base-structures/bs-button/bs-button.component';
import { BsRiveTextComponent } from '../../base-structures/bs-rive-text/bs-rive-text.component';
import { BsBulletsComponent } from '../../base-structures/bs-bullets/bs-bullets.component';
import { BsTermDialogComponent } from '../../base-structures/bs-term-dialog/bs-term-dialog.component';
import { BsTermComponent } from '../../base-structures/bs-term/bs-term.component';

@Component({
  selector: 'app-cs-topic-story',
  imports: [
    BsProgressBarComponent,
    BsHeadingComponent,
    BsTextComponent,
    BsRiveComponent,
    BsLinkComponent,
    BsButtonComponent,
    BsRiveTextComponent,
    BsBulletsComponent,
    BsTermDialogComponent,
    BsTermComponent,
  ],
  templateUrl: './cs-topic-story.component.html',
  styleUrl: './cs-topic-story.component.scss',
})
export class CsTopicStoryComponent implements OnInit {
  topicId = input.required<string>();
  pathToGlobalValues = signal('topic_page.global.story_pages');
  pathToPage0 = signal('');
  pathToPageEnd = signal('');
  pathToPages = signal('');
  currentPage = signal(0);
  currentProgress = signal('');
  currentPathToPage = signal('');
  pathToButtonForward = signal(
    `${this.pathToGlobalValues()}.bs_button_forward`
  );
  pathToButtonBackwards = signal(
    `${this.pathToGlobalValues()}.bs_button_backwards`
  );

  // All pages inclunding page 0
  pagesArray: { key: string; value: any }[] = [];
  currentPageObjects: { key: string; type: string; value: any }[] = [];

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    // this.pathToGlobalValues.set('topic_page.global.story_pages');
    this.pathToPage0.set(`${this.pathToGlobalValues()}.story_start`);
    this.pathToPageEnd.set(`${this.pathToGlobalValues()}.story_end`);
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

    const pageEnd = getNestedValue(deJson, this.pathToPageEnd());
    this.logger.log(page0);
    this.logger.log(pageEnd);
    Object.entries(pageEnd).forEach(([key, value]) => {
      this.pagesArray.push({ key, value });
    });

    this.logger.log('Count Story Pages: ' + this.pagesArray.length);
    this.logger.log(this.pagesArray);

    // Map with Type
    this.setCurrentPage();
    this.logger.log(this.currentPageObjects);
  }

  setCurrentPage() {
    const currentPageObj = this.pagesArray[this.currentPage()];
    if (!currentPageObj) return;

    // Set correct Path to Page
    if (this.currentPage() === this.pagesArray.length - 1) {
      this.currentPathToPage.set(`${this.pathToPageEnd()}.page_end`);
    } else if (this.currentPage() > 0) {
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
          : key.startsWith('bs_rive_text')
          ? 'rive-text'
          : key.startsWith('bs_rive')
          ? 'rive'
          : key.startsWith('bs_link')
          ? 'link'
          : key.startsWith('bs_bullets')
          ? 'bullets'
          : key.startsWith('bs_term')
          ? 'term'
          : 'unknown';

        return { key, type, value };
      }
    );
    this.logger.log('---->>' + currentPageObj.key);
    this.logger.log('---->>' + this.currentPageObjects);

    // Update Progress
    this.currentProgress.set(
      this.getCurrentProgress(this.pagesArray.length, this.currentPage())
    );
  }

  getCurrentProgress(countPages: number, currentPage: number): string {
    const progress = (currentPage / (countPages - 1)) * 100;
    this.logger.log('progress - ' + progress);
    return progress.toString();
  }

  nextPage() {
    this.currentPage.set(this.currentPage() + 1);
    this.setCurrentPage();
    this.logger.log(this.currentPage());
  }

  previousPage() {
    this.currentPage.set(this.currentPage() - 1);
    this.setCurrentPage();
    this.logger.log(this.currentPage());
  }
}
