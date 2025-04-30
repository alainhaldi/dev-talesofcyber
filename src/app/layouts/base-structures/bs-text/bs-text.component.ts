import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-bs-text',
  imports: [TranslatePipe],
  templateUrl: './bs-text.component.html',
  styleUrl: './bs-text.component.scss',
})
export class BsTextComponent {
  text = input.required<string>();
}
