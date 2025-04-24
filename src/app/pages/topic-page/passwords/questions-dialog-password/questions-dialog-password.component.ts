import { Component, Inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-questions-dialog-password',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './questions-dialog-password.component.html',
  styleUrl: './questions-dialog-password.component.scss',
})
export class QuestionsDialogPasswordComponent {
  localQuestionId = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { questionId: number }) {
    this.localQuestionId = data.questionId;
  }
}
