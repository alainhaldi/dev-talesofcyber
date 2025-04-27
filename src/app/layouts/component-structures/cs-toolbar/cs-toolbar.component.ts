import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cs-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './cs-toolbar.component.html',
  styleUrl: './cs-toolbar.component.scss',
})
export class CsToolbarComponent {
  showHomeIcon = input<boolean>(false);
  showBackIcon = input<boolean>(false);
  showMenuIcon = input<boolean>(false);
  showCloseIcon = input<boolean>(false);
}
