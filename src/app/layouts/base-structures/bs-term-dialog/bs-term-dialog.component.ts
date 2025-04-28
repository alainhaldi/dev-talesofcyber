import { Component, Inject, signal } from '@angular/core';
import { BsTitleComponent } from '../bs-title/bs-title.component';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { BsTextComponent } from '../bs-text/bs-text.component';

@Component({
  selector: 'app-bs-term-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule,
    BsTitleComponent,
    BsTextComponent,
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
