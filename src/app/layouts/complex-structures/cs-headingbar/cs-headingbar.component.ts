import { Component, input } from '@angular/core';
import { BsHeadingComponent } from '../../base-structures/bs-heading/bs-heading.component';

@Component({
  selector: 'app-cs-headingbar',
  imports: [BsHeadingComponent],
  templateUrl: './cs-headingbar.component.html',
  styleUrl: './cs-headingbar.component.scss',
})
export class CsHeadingbarComponent {
  heading = input.required<string>();
}
