import { Component, input, OnInit, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-bs-link',
  imports: [TranslatePipe],
  templateUrl: './bs-link.component.html',
  styleUrl: './bs-link.component.scss',
})
export class BsLinkComponent implements OnInit {
  pathToLink = input.required<string>();
  textBefore = signal('');
  textAfter = signal('');
  alias = signal('');
  url = signal('');

  ngOnInit(): void {
    this.textBefore.set(`${this.pathToLink()}.bs_text_before`);
    this.textAfter.set(`${this.pathToLink()}.bs_text_after`);
    this.alias.set(`${this.pathToLink()}.alias`);
    this.url.set(`${this.pathToLink()}.url`);
  }
}
