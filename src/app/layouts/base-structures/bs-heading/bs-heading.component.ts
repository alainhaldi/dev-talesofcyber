import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-bs-heading',
  imports: [TranslatePipe],
  templateUrl: './bs-heading.component.html',
  styleUrl: './bs-heading.component.scss',
})
export class BsHeadingComponent {
  heading = input.required<string>();
}
