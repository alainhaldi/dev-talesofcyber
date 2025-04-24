import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-questions-dialog-password',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './questions-dialog-password.component.html',
  styleUrl: './questions-dialog-password.component.scss',
})
export class QuestionsDialogPasswordComponent {}
