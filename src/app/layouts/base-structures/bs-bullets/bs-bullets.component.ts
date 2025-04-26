import { Component, input, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import de from '../../../../../public/i18n/de.json';
import { LoggerService } from '../../../core/logger.service';
import deJson from '../../../../../public/i18n/de.json';
import { BsTextComponent } from '../bs-text/bs-text.component';
import { BsLinkComponent } from '../bs-link/bs-link.component';

@Component({
  selector: 'app-bs-bullets',
  imports: [TranslatePipe, BsTextComponent, BsLinkComponent],
  templateUrl: './bs-bullets.component.html',
  styleUrl: './bs-bullets.component.scss',
})
export class BsBulletsComponent implements OnInit {
  pathToBullets = input.required<string>();
  bulletsArray: { key: string; type: string; value: any }[] = [];

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    // Important: You cant acess a json object with only one path, you need to go down the stair key after key
    const bullets = this.getNestedValue(deJson, this.pathToBullets());

    if (!bullets) {
      this.logger.error(`Path ${this.pathToBullets()} not found`);
    }

    this.bulletsArray = Object.entries(bullets).map(([key, value]) => {
      const type = key.startsWith('bs_text')
        ? 'text'
        : key.startsWith('bs_link')
        ? 'link'
        : 'unknown';
      return { key, type, value };
    });
  }

  getNestedValue(jsonFile: any, path: string): any {
    return path.split('.').reduce((acc, key) => acc?.[key], jsonFile);
  }
}
