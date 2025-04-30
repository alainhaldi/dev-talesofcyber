import { Component, inject, input, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BsTermDialogComponent } from '../bs-term-dialog/bs-term-dialog.component';
import { BsTextComponent } from '../bs-text/bs-text.component';

@Component({
  selector: 'app-bs-term',
  imports: [BsTextComponent],
  templateUrl: './bs-term.component.html',
  styleUrl: './bs-term.component.scss',
})
export class BsTermComponent {
  text_before = input<string>('');
  text_after = input<string>('');
  term = input.required<string>();
  description = input.required<string>();

  // Dialog
  readonly dialog = inject(MatDialog);

  openDialog(term: string, description: string) {
    const dialogRef = this.dialog.open(BsTermDialogComponent, {
      data: { term: this.term(), description: this.description() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
