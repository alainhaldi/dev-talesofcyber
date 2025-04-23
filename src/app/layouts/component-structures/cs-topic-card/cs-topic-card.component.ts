import { Component, input, OnInit } from '@angular/core';
import { BsRiveComponent } from '../../base-structures/bs-rive/bs-rive.component';
import { BsTitleComponent } from '../../base-structures/bs-title/bs-title.component';
import { BsTextComponent } from '../../base-structures/bs-text/bs-text.component';
import { RouterLink } from '@angular/router';
import {
  pathToTopic,
  pathToTopicDescription,
  pathToTopicTitle,
} from '../../../topics.config';

@Component({
  selector: 'app-cs-topic-card',
  imports: [BsRiveComponent, BsTitleComponent, BsTextComponent, RouterLink],
  templateUrl: './cs-topic-card.component.html',
  styleUrl: './cs-topic-card.component.scss',
})
export class CsTopicCardComponent implements OnInit {
  // Import Global Variables
  localPathToTopic = pathToTopic;
  localPathToTopicTitle = pathToTopicTitle;
  localPathToTopicDescription = pathToTopicDescription;

  // Local Variables
  topicJsonId = input.required<string>();
  topicUrlId = input.required<string>();
  pathToTitle!: string;
  pathToDescription!: string;

  // Need to use ngOnInit to set the pathToTitle and pathToDescription
  // because they depend on the topicId input wich is not available
  // at the time of the component initialization
  ngOnInit() {
    this.pathToTitle =
      this.localPathToTopic + this.topicJsonId() + this.localPathToTopicTitle;
    this.pathToDescription =
      this.localPathToTopic +
      this.topicJsonId() +
      this.localPathToTopicDescription;
  }
}
