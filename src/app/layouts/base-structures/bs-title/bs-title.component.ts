import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bs-title',
  imports: [],
  templateUrl: './bs-title.component.html',
  styleUrl: './bs-title.component.scss',
})
export class BsTitleComponent {
  title = input.required<string>();
  isH1 = input<boolean>(false);
}
