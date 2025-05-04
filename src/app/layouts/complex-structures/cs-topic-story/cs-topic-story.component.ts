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
import { BsTermComponent } from '../../base-structures/bs-term/bs-term.component';
import { RiveObject } from '../../../models/rive-model';

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
  isLastPage = signal(false);
  currentProgress = signal('');
  currentPathToPage = signal('');
  pathToButtonForward = signal(
    `${this.pathToGlobalValues()}.bs_button_forward`
  );
  pathToButtonBackwards = signal(
    `${this.pathToGlobalValues()}.bs_button_backwards`
  );
  hasCustomButton = signal(false);

  // All pages inclunding page 0
  pagesArray: { key: string; value: any }[] = [];
  currentPageObjects: { key: string; type: string; value: any; id: string }[] =
    [];

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
    Object.entries(pageEnd).forEach(([key, value]) => {
      this.pagesArray.push({ key, value });
    });

    // Map with Type
    this.setCurrentPage();
  }

  setCurrentPage() {
    // Empty List
    this.currentPageObjects = [];

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
          ? ((value = value as RiveObject), 'rive')
          : key.startsWith('bs_link')
          ? 'link'
          : key.startsWith('bs_bullets')
          ? 'bullets'
          : key.startsWith('bs_term')
          ? 'term'
          : 'unknown';

        // Needs unique ID otherwise angular wont render the component new since it thinks it didnt change
        const id = `${key}-${this.currentPage()}`;

        return { key, type, value, id };
      }
    );

    // Update Progress
    this.currentProgress.set(
      this.getCurrentProgress(this.pagesArray.length, this.currentPage())
    );

    this.hasCustomButton.set(this.checkIfCustomButton(currentPageObj));
    // this.logger.log(this.hasCustomButton());

    this.isLastPage.set(
      this.checkIfLastPage(this.currentPage(), this.pagesArray)
    );

    // Log Current Rive Image
    for (const obj of this.currentPageObjects) {
      if (obj.type === 'rive') {
        this.logger.log(`~> ${obj.value.src}`);
        this.logger.log(obj.value);
      }
    }
  }

  getCurrentProgress(countPages: number, currentPage: number): string {
    const progress = (currentPage / (countPages - 1)) * 100;
    // this.logger.log('progress - ' + progress);
    return progress.toString();
  }

  nextPage() {
    this.currentPage.set(this.currentPage() + 1);
    this.setCurrentPage();
    this.logger.log(`Page: ${this.currentPage()}`);
  }

  previousPage() {
    this.currentPage.set(this.currentPage() - 1);
    this.setCurrentPage();
    this.logger.log(`Page: ${this.currentPage()}`);
  }

  checkIfCustomButton(object: any): boolean {
    const localHasCustomButton = object.value.bs_buttons_custom !== undefined;
    return localHasCustomButton;
  }

  checkIfLastPage(currentPage: number, pagesArray: any) {
    return currentPage >= pagesArray.length - 1;
  }
}
