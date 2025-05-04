import { Component, input } from '@angular/core';
import { BsRiveComponent } from '../bs-rive/bs-rive.component';
import { BsTextComponent } from '../bs-text/bs-text.component';
import { RiveObject } from '../../../models/rive-model';

@Component({
  selector: 'app-bs-rive-text',
  imports: [BsRiveComponent, BsTextComponent],
  templateUrl: './bs-rive-text.component.html',
  styleUrl: './bs-rive-text.component.scss',
})
export class BsRiveTextComponent {
  text = input.required<string>();
  src = input.required<string>();

  get riveObj(): RiveObject {
    return {
      size: 'S',
      src: this.src(),
      stateMachines: ['State Machine 1'],
    };
  }
}
