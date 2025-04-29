import { Component } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/component-structures/cs-toolbar/cs-toolbar.component';
import { BsTitleComponent } from '../../layouts/base-structures/bs-title/bs-title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-page',
  imports: [CsToolbarComponent, BsTitleComponent, RouterLink],
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
