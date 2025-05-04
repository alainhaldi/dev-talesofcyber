import { Component, Inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { BsTextComponent } from '../bs-text/bs-text.component';
import { BsHeadingComponent } from '../bs-heading/bs-heading.component';

@Component({
  selector: 'app-bs-term-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule,
    BsTextComponent,
    BsHeadingComponent,
  ],
  templateUrl: './bs-term-dialog.component.html',
  styleUrl: './bs-term-dialog.component.scss',
})
export class BsTermDialogComponent {
  localTerm = signal('');
  localDescription = signal('');

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { term: string; description: string }
  ) {
    this.localTerm.set(data.term);
    this.localDescription.set(data.description);
  }
}
