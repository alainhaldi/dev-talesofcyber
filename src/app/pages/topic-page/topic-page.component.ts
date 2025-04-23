import {
  Component,
  inject,
  OnInit,
  signal,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
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
  // Placeholder for the dynamic component
  @ViewChild('container', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  // Access current route
  route = inject(ActivatedRoute);
  jsonId = signal('');

  async ngOnInit() {
    // Get the urlId from the route
    const urlId = this.route.snapshot.paramMap.get('id')!;
    // Find the topic in the topics array
    const topic = topics.find((topic) => topic.urlId === urlId);
    if (topic) {
      this.jsonId.set(topic.jsonId);
      const cmp = await topic.loadComponent();

      // Clear the container and create the component
      this.viewContainer.clear();
      const ref = this.viewContainer.createComponent(cmp);

      // pass the jsonId to the component
      ref.setInput?.('jsonId', topic.jsonId);
    }
  }
}
