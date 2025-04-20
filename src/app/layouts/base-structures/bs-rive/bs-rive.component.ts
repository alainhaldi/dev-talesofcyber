import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { Rive } from '@rive-app/canvas';
import { LoggerService } from '../../../core/logger.service';

@Component({
  selector: 'app-bs-rive',
  imports: [],
  templateUrl: './bs-rive.component.html',
  styleUrl: './bs-rive.component.scss',
})
export class BsRiveComponent {
  width = input.required<string>();
  height = input.required<string>();
  src = input.required<string>();
  stateMachines = input.required<string[]>();

  // Rive animation
  @ViewChild('riveCanvas', { static: false })
  riveCanvas?: ElementRef<HTMLCanvasElement>;

  constructor(private logger: LoggerService) {}

  ngAfterViewInit() {
    this.logger.log(`-> Rive File src: ${this.src()}`);
    this.logger.log(`-> Rive File State Machines: ${this.stateMachines()}`);
    if (!this.riveCanvas) return;

    const canvas = this.riveCanvas.nativeElement;
    new Rive({
      src: this.src(), // place .riv file inside /src/assets/
      canvas,
      stateMachines: this.stateMachines(),
      autoplay: true,
    });
  }
}
