import { Component, Inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { getAnswer, getQuestion } from '../../../../topics.config';
import { TranslatePipe } from '@ngx-translate/core';
import { BsBulletsComponent } from '../../../../layouts/base-structures/bs-bullets/bs-bullets.component';
import { BsTextComponent } from '../../../../layouts/base-structures/bs-text/bs-text.component';
import { BsHeadingComponent } from '../../../../layouts/base-structures/bs-heading/bs-heading.component';
import { BsTitleComponent } from '../../../../layouts/base-structures/bs-title/bs-title.component';
import { BsRiveComponent } from '../../../../layouts/base-structures/bs-rive/bs-rive.component';
import deJson from '../../../../../../public/i18n/de.json';

@Component({
  selector: 'app-questions-dialog-password',
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
  templateUrl: './questions-dialog-password.component.html',
  styleUrl: './questions-dialog-password.component.scss',
})
export class QuestionsDialogPasswordComponent {
  localTopicId: string = '0';
  localQuestionId: string = '0';
  localPathToQuestion = '';
  localPathToAnswer = '';
  localPathToAnswerHeading = '';
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

    const topicKey = 'topic_' + this.localTopicId;
    const questionKey = 'question_' + this.localQuestionId;

    const topic = deJson.topic_page.topics as Record<string, any>; // <-- Typumgehung
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
