import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-bs-button',
  imports: [TranslatePipe],
  templateUrl: './bs-button.component.html',
  styleUrl: './bs-button.component.scss',
})
export class BsButtonComponent {
  text = input.required<string>();
  isLarge = input.required<boolean>();

  // Future implementation for button types
  // isForwardButton = input.required<boolean>();
  // isBackButton = input.required<boolean>();
}
