import { Component, input } from '@angular/core';
import { BsRiveComponent } from '../../base-structures/bs-rive/bs-rive.component';
import { BsTitleComponent } from '../../base-structures/bs-title/bs-title.component';
import { BsTextComponent } from '../../base-structures/bs-text/bs-text.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cs-topic-card',
  imports: [BsRiveComponent, BsTitleComponent, BsTextComponent, RouterLink],
  templateUrl: './cs-topic-card.component.html',
  styleUrl: './cs-topic-card.component.scss',
})
export class CsTopicCardComponent {
  pathToTitle = input.required<string>();
  pathToText = input.required<string>();
}
