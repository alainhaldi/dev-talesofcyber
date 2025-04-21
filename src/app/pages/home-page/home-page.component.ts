import { Component } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/component-structures/cs-toolbar/cs-toolbar.component';
import { BsSpacerContainerComponent } from '../../layouts/base-structures/bs-spacer-container/bs-spacer-container.component';
import { BsRiveComponent } from '../../layouts/base-structures/bs-rive/bs-rive.component';
import { BsTitleComponent } from '../../layouts/base-structures/bs-title/bs-title.component';

@Component({
  selector: 'app-home-page',
  imports: [
    CsToolbarComponent,
    BsSpacerContainerComponent,
    BsRiveComponent,
    BsTitleComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  pathToHotTopics = 'Top Themen';
}
