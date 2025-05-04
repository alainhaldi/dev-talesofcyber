import { Component } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/complex-structures/cs-toolbar/cs-toolbar.component';
import { BsTitleComponent } from '../../layouts/base-structures/bs-title/bs-title.component';
import { RouterLink } from '@angular/router';
import { BsSpacerContainerComponent } from '../../layouts/base-structures/bs-spacer-container/bs-spacer-container.component';

@Component({
  selector: 'app-menu-page',
  imports: [
    CsToolbarComponent,
    BsTitleComponent,
    RouterLink,
    BsSpacerContainerComponent,
  ],
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.scss',
})
export class MenuPageComponent {
  menuItems = [
    { link: '/contact', label: 'menu_page.bs_title_contact' },
    // Future implementations
    // { link: '/feedback', label: 'menu_page.bs_title_feedback' },
    // { link: '/dictionary', label: 'menu_page.bs_title_dictionary' },
    { link: '/further-infos', label: 'menu_page.bs_title_further_infos' },
    { link: '/liability', label: 'menu_page.bs_title_liability' },
  ];
}
