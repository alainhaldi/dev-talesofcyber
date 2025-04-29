import { Component, input } from '@angular/core';
import { BsSpacerContainerComponent } from '../../base-structures/bs-spacer-container/bs-spacer-container.component';
import { BsHeadingComponent } from '../../base-structures/bs-heading/bs-heading.component';

@Component({
  selector: 'app-cs-headingbar',
  imports: [BsSpacerContainerComponent, BsHeadingComponent],
  templateUrl: './cs-headingbar.component.html',
  styleUrl: './cs-headingbar.component.scss',
})
export class CsHeadingbarComponent {
  heading = input.required<string>();
}
