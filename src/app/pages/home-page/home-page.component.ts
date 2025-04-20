import { Component } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/component-structures/cs-toolbar/cs-toolbar.component';
import { BsSpacerContainerComponent } from '../../layouts/base-structures/bs-spacer-container/bs-spacer-container.component';

@Component({
  selector: 'app-home-page',
  imports: [CsToolbarComponent, BsSpacerContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
