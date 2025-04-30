import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { topics } from '../../topics.config';
import { CsToolbarComponent } from '../../layouts/complex-structures/cs-toolbar/cs-toolbar.component';
import { BsProgressBarComponent } from '../../layouts/base-structures/bs-progress-bar/bs-progress-bar.component';
import { CsTopicStoryComponent } from '../../layouts/complex-structures/cs-topic-story/cs-topic-story.component';

@Component({
  selector: 'app-story-page',
  imports: [CsToolbarComponent, CsTopicStoryComponent],
  templateUrl: './story-page.component.html',
  styleUrl: './story-page.component.scss',
})
export class StoryPageComponent implements OnInit {
  // Access current route
  currentRoute = inject(ActivatedRoute);
  topicId = signal('');
  // pageId = signal('');

  ngOnInit(): void {
    const urlId = this.currentRoute.snapshot.paramMap.get('id')!;
    // Find the topic in the topics array
    const topic = topics.find((topic) => topic.urlId === urlId);
    if (topic) {
      this.topicId.set(topic.topicId);
    }
  }
}
