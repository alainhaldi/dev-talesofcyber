import {
  Component,
  inject,
  OnInit,
  signal,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { topics } from '../../topics.config';
import { CommonModule } from '@angular/common';
import { CsToolbarComponent } from '../../layouts/component-structures/cs-toolbar/cs-toolbar.component';
import { BsSpacerContainerComponent } from '../../layouts/base-structures/bs-spacer-container/bs-spacer-container.component';
import { CsTopicQuestionHeaderComponent } from '../../layouts/component-structures/cs-topic-question-header/cs-topic-question-header.component';
import { CsTopicQuestionsComponent } from '../../layouts/component-structures/cs-topic-questions/cs-topic-questions.component';

@Component({
  selector: 'app-topic-page',
  imports: [
    CommonModule,
    CsToolbarComponent,
    BsSpacerContainerComponent,
    CsTopicQuestionHeaderComponent,
    CsTopicQuestionsComponent,
  ],
  templateUrl: './topic-page.component.html',
  styleUrl: './topic-page.component.scss',
})
export class TopicPageComponent implements OnInit {
  // Access current route
  currentRoute = inject(ActivatedRoute);
  topicId = signal('');

  async ngOnInit() {
    const urlId = this.currentRoute.snapshot.paramMap.get('id')!;
    // Find the topic in the topics array
    const topic = topics.find((topic) => topic.urlId === urlId);
    if (topic) {
      this.topicId.set(topic.topicId);
    }
  }
}
