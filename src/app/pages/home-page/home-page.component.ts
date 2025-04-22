import { Component } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/component-structures/cs-toolbar/cs-toolbar.component';
import { BsSpacerContainerComponent } from '../../layouts/base-structures/bs-spacer-container/bs-spacer-container.component';
import { BsRiveComponent } from '../../layouts/base-structures/bs-rive/bs-rive.component';
import { BsTitleComponent } from '../../layouts/base-structures/bs-title/bs-title.component';
import { BsButtonComponent } from '../../layouts/base-structures/bs-button/bs-button.component';
import { CsTopicCardComponent } from '../../layouts/component-structures/cs-topic-card/cs-topic-card.component';

@Component({
  selector: 'app-home-page',
  imports: [
    CsToolbarComponent,
    BsSpacerContainerComponent,
    BsRiveComponent,
    BsTitleComponent,
    BsButtonComponent,
    CsTopicCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  pathToTitleHotTopics = 'home_page.bs_title_hot_topics';
  pathToButtonAllTopics = 'home_page.bs_button_all_topics';
  // Topic Card
  hot_topics_ids: string[] = [
    'topic_1',
    'topic_2',
    'topic_3',
    'topic_4',
    'topic_5',
  ];
  pathToHotTopics = 'topic_page.topics.hot_topics.';
  pathToTitleTopic = '.infos.bs_title_topic';
}
