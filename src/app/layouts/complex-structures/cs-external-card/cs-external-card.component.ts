import { Component, input } from '@angular/core';
import { BsHeadingComponent } from '../../base-structures/bs-heading/bs-heading.component';
import { BsTextComponent } from '../../base-structures/bs-text/bs-text.component';
import { BsLinkComponent } from '../../base-structures/bs-link/bs-link.component';

@Component({
  selector: 'app-cs-external-card',
  imports: [BsHeadingComponent, BsTextComponent, BsLinkComponent],
  templateUrl: './cs-external-card.component.html',
  styleUrl: './cs-external-card.component.scss',
})
export class CsExternalCardComponent {
  name = input.required<string>();
  path_to_logos: string = '../../../../assets/external-links-page/';
  logoName = input.required<string>();
  description = input.required<string>();
  pathToLink = input.required<string>();
}
