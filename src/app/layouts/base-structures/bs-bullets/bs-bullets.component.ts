import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-bs-bullets',
  imports: [TranslatePipe],
  templateUrl: './bs-bullets.component.html',
  styleUrl: './bs-bullets.component.scss',
})
export class BsBulletsComponent {
  list = [1, 2, 3, 4];
}
