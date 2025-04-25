import { Component, Inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { getAnswer, getQuestion } from '../../../../topics.config';
import { TranslatePipe } from '@ngx-translate/core';
import { BsBulletsComponent } from '../../../../layouts/base-structures/bs-bullets/bs-bullets.component';
import { BsTextComponent } from '../../../../layouts/base-structures/bs-text/bs-text.component';
import { BsHeadingComponent } from '../../../../layouts/base-structures/bs-heading/bs-heading.component';
import { BsButtonComponent } from '../../../../layouts/base-structures/bs-button/bs-button.component';

@Component({
  selector: 'app-questions-dialog-password',
  imports: [
    TranslatePipe,
    MatButtonModule,
    MatDialogModule,
    BsBulletsComponent,
    BsTextComponent,
    BsHeadingComponent,
    BsButtonComponent,
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
  // localPathToAnswerText = '';

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
  }
}
