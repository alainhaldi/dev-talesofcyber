import {
  Component,
  ElementRef,
  input,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { Rive } from '@rive-app/canvas';

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

  ngOnInit(): void {
    this.height.set(this.getSize(this.size()).height);
    this.width.set(this.getSize(this.size()).width);
  }

  ngAfterViewInit() {
    if (!this.riveCanvas) return;

    const canvas = this.riveCanvas.nativeElement;
    new Rive({
      src: this.src(),
      canvas,
      stateMachines: this.stateMachines(),
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
        return { height: 250, width: 324 };
      default:
        return { height: 0, width: 0 };
    }
  }
}
