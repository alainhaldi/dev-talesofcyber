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
import { RiveObject } from '../../../models/rive-model';

@Component({
  selector: 'app-bs-rive',
  imports: [],
  templateUrl: './bs-rive.component.html',
  styleUrl: './bs-rive.component.scss',
})
export class BsRiveComponent implements OnInit {
  riveObject = input.required<RiveObject>();
  widthCanvas = signal(0);
  heightCanvas = signal(0);

  // Rive animation
  @ViewChild('riveCanvas', { static: false })
  riveCanvas?: ElementRef<HTMLCanvasElement>;

  constructor(private logger: LoggerService) {
    this.logger.log('~~--~~> Konstruktor');
  }

  ngOnInit(): void {
    this.heightCanvas.set(this.getSize(this.riveObject().size).height);
    this.widthCanvas.set(this.getSize(this.riveObject().size).width);
    this.logger.log('~~--~~> ngOnInit');
  }

  ngAfterViewInit() {
    this.logger.log('~~--~~> ngAfterViewInit');
    if (!this.riveCanvas) return;

    const canvas = this.riveCanvas.nativeElement;

    new Rive({
      src: this.riveObject().src,
      canvas,
      stateMachines: this.riveObject().stateMachines,
      autoplay: true,
    });
  }

  getSize(size: string): { height: number; width: number } {
    switch (size) {
      case 'L':
        return { height: 300, width: 324 };
      case 'M':
        return { height: 124, width: 324 };
      case 'S':
        return { height: 30, width: 30 };
      case 'Topic':
        return { height: 187, width: 240 };
      case 'Hero':
        return { height: 270, width: 270 };
      default:
        return { height: 0, width: 0 };
    }
  }
}
