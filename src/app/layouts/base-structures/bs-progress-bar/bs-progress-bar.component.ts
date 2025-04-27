import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-bs-progress-bar',
  imports: [MatProgressBarModule],
  templateUrl: './bs-progress-bar.component.html',
  styleUrl: './bs-progress-bar.component.scss',
})
export class BsProgressBarComponent {}
