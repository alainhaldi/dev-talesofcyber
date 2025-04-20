import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-c-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './c-toolbar.component.html',
  styleUrl: './c-toolbar.component.scss',
})
export class CToolbarComponent {
  showHomeIcon = input<boolean>(false);
  showMenuIcon = input<boolean>(false);
}
