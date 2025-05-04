import { Component, signal } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/complex-structures/cs-toolbar/cs-toolbar.component';
import { CsHeadingbarComponent } from '../../layouts/complex-structures/cs-headingbar/cs-headingbar.component';
import { BsHeadingComponent } from '../../layouts/base-structures/bs-heading/bs-heading.component';
import { BsTextComponent } from '../../layouts/base-structures/bs-text/bs-text.component';
import { BsLinkComponent } from '../../layouts/base-structures/bs-link/bs-link.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    CsToolbarComponent,
    CsHeadingbarComponent,
    BsHeadingComponent,
    BsTextComponent,
    BsLinkComponent,
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  pathToTitle = 'contact_page.bs_heading_title_1';
  pathToName = 'contact_page.name';
  pathToJob = 'contact_page.job';
  pathToImage = '../../../../assets/contact-page/';
  pathToHeading = 'contact_page.bs_heading_1';
  pathToDescription = 'contact_page.bs_text_description_1';
  pathToAdress = 'contact_page.infos.adress';
  pathToEmail = 'contact_page.infos.email';
  pathToLink = 'contact_page.infos.bs_link_1';
  src = signal('../../../../assets/contact-page/');
  portrait = signal('portrait.png');

  onChangePortrait() {
    if (this.portrait() === 'portrait.png') {
      this.portrait.set('handsome.png');
    } else if (this.portrait() === 'handsome.png') {
      this.portrait.set('portrait.png');
    }
  }
}
