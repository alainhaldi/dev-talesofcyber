import { Component } from '@angular/core';
import { LoggerService } from './core/logger.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'talesofcyber';

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log(`-> Logging from AppComponent: ${this.title}`);
  }
}
