import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-bs-title',
  imports: [TranslatePipe],
  templateUrl: './bs-title.component.html',
  styleUrl: './bs-title.component.scss',
})
export class BsTitleComponent {
  title = input.required<string>();
  isH1 = input<boolean>(false);
}
