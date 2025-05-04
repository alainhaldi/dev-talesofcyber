import { Component, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-bs-button',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './bs-button.component.html',
  styleUrl: './bs-button.component.scss',
})
export class BsButtonComponent implements OnInit {
  // textAbove = input<string>('Text abooove');
  textAbove = input<string>('');
  hasTextAbove = signal(false);
  text = input.required<string>();
  isLarge = input.required<boolean>();
  activatedRouterlink = input<boolean>(false);
  customRouterLink = input<string>('');

  ngOnInit(): void {
    this.hasTextAbove.set(this.textAbove() !== '');
  }
}
