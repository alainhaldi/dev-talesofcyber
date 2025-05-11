import { Component, input, OnInit, signal } from '@angular/core';
import { BsRiveComponent } from '../../base-structures/bs-rive/bs-rive.component';
import { BsTitleComponent } from '../../base-structures/bs-title/bs-title.component';
import { BsTextComponent } from '../../base-structures/bs-text/bs-text.component';
import { RouterLink } from '@angular/router';
import { getTopicDescription, getTopicTitle } from '../../../topics.config';
import { RiveObject } from '../../../models/rive-model';

@Component({
  selector: 'app-cs-topic-card',
  imports: [BsRiveComponent, BsTitleComponent, BsTextComponent, RouterLink],
  templateUrl: './cs-topic-card.component.html',
  styleUrl: './cs-topic-card.component.scss',
})
export class CsTopicCardComponent implements OnInit {
  topicId = input.required<string>();
  urlId = input.required<string>();
  pathToTitle = signal('');
  pathToDescription = signal('');
  riveObj: RiveObject = {
    size: 'Topic',
    src: '',
    stateMachines: ['State Machine 1'],
  };

  // Need to use ngOnInit to set the pathToTitle and pathToDescription
  // because they depend on the topicId input wich is not available
  // at the time of the component initialization
  ngOnInit() {
    this.pathToTitle.set(getTopicTitle(this.topicId()));
    this.pathToDescription.set(getTopicDescription(this.topicId()));
    this.riveObj.src = `assets/hot-topics/${this.urlId()}.riv`;
  }
}
