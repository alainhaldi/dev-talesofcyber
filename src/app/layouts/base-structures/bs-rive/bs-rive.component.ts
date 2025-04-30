import {
  Component,
  ElementRef,
  input,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { Rive } from '@rive-app/canvas';
import { LoggerService } from '../../../core/logger.service';

@Component({
  selector: 'app-bs-rive',
  imports: [],
  templateUrl: './bs-rive.component.html',
  styleUrl: './bs-rive.component.scss',
})
export class BsRiveComponent implements OnInit {
  size = input.required<string>();
  width = signal(0);
  height = signal(0);
  src = input.required<string>();
  stateMachines = input.required<string[]>();

  // Rive animation
  @ViewChild('riveCanvas', { static: false })
  riveCanvas?: ElementRef<HTMLCanvasElement>;

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.getSize(this.size());
  }

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

    this.logger.log(this.height());
    this.logger.log(this.width());
  }

  getSize(size: string) {
    switch (size) {
      case 'L':
        this.height.set(300);
        this.width.set(324);
        break;
      case 'M':
        this.height.set(124);
        this.width.set(324);
        break;
      case 'S':
        this.height.set(30);
        this.width.set(30);
        break;
      case 'Topic':
        this.height.set(240);
        this.width.set(187);
        break;
      case 'Hero':
        this.height.set(390);
        this.width.set(270);
        break;
    }
  }
}
