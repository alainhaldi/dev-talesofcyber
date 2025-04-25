import { Component, input, OnInit, signal } from '@angular/core';
import { BsTitleComponent } from '../../base-structures/bs-title/bs-title.component';
import { BsTextComponent } from '../../base-structures/bs-text/bs-text.component';
import { BsButtonComponent } from '../../base-structures/bs-button/bs-button.component';
import { getTopicTitle } from '../../../topics.config';

@Component({
  selector: 'app-cs-topic-question-header',
  imports: [BsTitleComponent, BsTextComponent, BsButtonComponent],
  templateUrl: './cs-topic-question-header.component.html',
  styleUrl: './cs-topic-question-header.component.scss',
})
export class CsTopicQuestionHeaderComponent implements OnInit {
  topicId = input.required<string>();
  topicTitle = signal('');
  topicDescription = signal('');

  ngOnInit() {
    this.topicTitle.set(getTopicTitle(this.topicId()));
    // this.topicDescription.
  }
}
