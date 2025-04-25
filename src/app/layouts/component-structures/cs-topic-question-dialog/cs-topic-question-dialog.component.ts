import { Component, Inject, input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { BsBulletsComponent } from '../../base-structures/bs-bullets/bs-bullets.component';
import { BsTextComponent } from '../../base-structures/bs-text/bs-text.component';
import { BsHeadingComponent } from '../../base-structures/bs-heading/bs-heading.component';
import { BsTitleComponent } from '../../base-structures/bs-title/bs-title.component';
import { BsRiveComponent } from '../../base-structures/bs-rive/bs-rive.component';
import { getAnswer, getQuestion } from '../../../topics.config';
import deJson from '../../../../../public/i18n/de.json';

@Component({
  selector: 'app-cs-topic-question-dialog',
  imports: [
    TranslatePipe,
    MatButtonModule,
    MatDialogModule,
    BsBulletsComponent,
    BsTextComponent,
    BsHeadingComponent,
    BsTitleComponent,
    BsRiveComponent,
  ],
  templateUrl: './cs-topic-question-dialog.component.html',
  styleUrl: './cs-topic-question-dialog.component.scss',
})
export class CsTopicQuestionDialogComponent implements OnInit {
  localTopicId: string = '0';
  localQuestionId: string = '0';
  localPathToQuestion = '';
  localPathToAnswer = '';
  localPathToBullets = '';

  answerArray: { key: string; type: string; value: any }[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { questionId: string; topicId: string }
  ) {
    this.localQuestionId = data.questionId;
    this.localTopicId = data.topicId;

    this.localPathToQuestion = getQuestion(
      this.localTopicId,
      this.localQuestionId
    );

    this.localPathToAnswer = getAnswer(this.localTopicId, this.localQuestionId);

    this.localPathToBullets =
      getAnswer(this.localTopicId, this.localQuestionId) + '.bs_bullets';
  }

  ngOnInit(): void {
    // Read and extract Values from the JSON file
    const topicKey = 'topic_' + this.localTopicId;
    const questionKey = 'question_' + this.localQuestionId;

    const topic = deJson.topic_page.topics as Record<string, any>;
    const question = topic[topicKey].questions[questionKey];
    const answer = question.answer;

    this.answerArray = Object.entries(answer).map(([key, value]) => {
      const type = key.startsWith('bs_heading')
        ? 'heading'
        : key.startsWith('bs_text')
        ? 'text'
        : key.startsWith('bs_bullets')
        ? 'bullets'
        : key.startsWith('bs_rive')
        ? 'rive'
        : 'unknown';

      return { key, type, value };
    });
  }
}
