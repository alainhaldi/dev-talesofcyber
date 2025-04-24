import { Component, input, OnInit, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BsHeadingComponent } from '../../base-structures/bs-heading/bs-heading.component';
import { pathToTopic } from '../../../topics.config';
import de from '../../../../../public/i18n/de.json';
import { LoggerService } from '../../../core/logger.service';

@Component({
  selector: 'app-cs-topic-questions',
  imports: [MatListModule, MatDividerModule, BsHeadingComponent],
  templateUrl: './cs-topic-questions.component.html',
  styleUrl: './cs-topic-questions.component.scss',
})
export class CsTopicQuestionsComponent implements OnInit {
  jsonId = input.required<string>();
  pathToQuestions = signal('');
  countQuestions: number = 0;
  // A array of all question IDs
  questionIds: number[] = [];
  // A array of arrays with each 5 questions
  questionPages: number[][] = [];
  currentPageIdx: number = 0;

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.pathToQuestions.set(pathToTopic + this.jsonId() + '.questions');
    this.countQuestions = this.GetCountQuestions(this.pathToQuestions());

    // Add all question IDs to one array
    for (let i = 1; i <= this.countQuestions; i++) {
      this.questionIds.push(i);
    }

    // Split the question IDs into pages of 5 questions each
    for (let i = 0; i < this.questionIds.length; i += 5) {
      this.questionPages.push(this.questionIds.slice(i, i + 5));
    }

    this.logger.log(
      `cs-topic-questions -> Path to questions: ${this.pathToQuestions()}`
    );
    this.logger.log(
      `cs-topic-questions -> Count questions: ${this.countQuestions}`
    );
    this.logger.log(
      `cs-topic-questions -> Count pages: ${this.questionPages.length}`
    );
  }

  // Get the count of questions from the JSON file
  GetCountQuestions(pathToQuestions: string): number {
    const keys = pathToQuestions.split('.');
    let questions: any = de;

    for (const key of keys) {
      questions = questions?.[key];
      if (!questions) {
        this.logger.error(`-> Path to questions not found: ${pathToQuestions}`);
        return 0;
      }
    }
    return Object.keys(questions).length;
  }

  setPage(pageidx: number) {
    this.currentPageIdx = pageidx;
    this.logger.log(
      `cs-topic-questions -> Current page index: ${this.currentPageIdx}`
    );
  }
}
