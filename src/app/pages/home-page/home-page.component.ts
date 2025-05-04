import { Component } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/complex-structures/cs-toolbar/cs-toolbar.component';
import { BsSpacerContainerComponent } from '../../layouts/base-structures/bs-spacer-container/bs-spacer-container.component';
import { BsRiveComponent } from '../../layouts/base-structures/bs-rive/bs-rive.component';
import { BsTitleComponent } from '../../layouts/base-structures/bs-title/bs-title.component';
import { BsButtonComponent } from '../../layouts/base-structures/bs-button/bs-button.component';
import { CsTopicCardComponent } from '../../layouts/complex-structures/cs-topic-card/cs-topic-card.component';
import { hot_topics } from '../../topics.config';
import { RiveObject } from '../../models/rive-model';

@Component({
  selector: 'app-home-page',
  imports: [
    CsToolbarComponent,
    BsRiveComponent,
    BsTitleComponent,
    CsTopicCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  pathToTitleHotTopics = 'home_page.bs_title_hot_topics';
  pathToButtonAllTopics = 'home_page.bs_button_all_topics';
  local_hot_topics = hot_topics;
  riveObj: RiveObject = {
    size: 'Hero',
    src: 'assets/home-page/hero2.riv',
    stateMachines: ['State Machine 1'],
  };
}
