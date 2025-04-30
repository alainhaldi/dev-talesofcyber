import { Component } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/complex-structures/cs-toolbar/cs-toolbar.component';
import { CsHeadingbarComponent } from '../../layouts/complex-structures/cs-headingbar/cs-headingbar.component';
import { BsTextComponent } from '../../layouts/base-structures/bs-text/bs-text.component';

@Component({
  selector: 'app-liability-page',
  imports: [CsToolbarComponent, CsHeadingbarComponent, BsTextComponent],
  templateUrl: './liability-page.component.html',
  styleUrl: './liability-page.component.scss',
})
export class LiabilityPageComponent {
  pathToHeading = 'liability_page.bs_heading_title_1';
  pathToText1 = 'liability_page.bs_text_1';
  pathToText2 = 'liability_page.bs_text_2';
  pathToText3 = 'liability_page.bs_text_3';
}
