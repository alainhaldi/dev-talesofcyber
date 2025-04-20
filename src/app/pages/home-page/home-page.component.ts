import { Component } from '@angular/core';
import { CToolbarComponent } from '../../layouts/component_structures/c-toolbar/c-toolbar.component';

@Component({
  selector: 'app-home-page',
  imports: [CToolbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
