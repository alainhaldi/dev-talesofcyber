import { Component, inject, OnInit, signal, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { topics } from '../../topics.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-page',
  imports: [CommonModule],
  templateUrl: './topic-page.component.html',
  styleUrl: './topic-page.component.scss',
})
export class TopicPageComponent implements OnInit {
  // Access current route
  route = inject(ActivatedRoute);
  componentToLoad = signal<Type<any> | null>(null);
  jsonId = signal('');

  async ngOnInit() {
    // Get the urlId from the route
    const urlId = this.route.snapshot.paramMap.get('id')!;
    // Find the topic in the topics array
    const topic = topics.find((topic) => topic.urlId === urlId);
    if (topic) {
      this.jsonId.set(topic.jsonId);
      // Load the component dynamically
      const cmp = await topic.loadComponent();
      this.componentToLoad.set(cmp);
    }
  }
}
