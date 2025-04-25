import { Component, input, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import de from '../../../../../public/i18n/de.json';
import { LoggerService } from '../../../core/logger.service';

@Component({
  selector: 'app-bs-bullets',
  imports: [TranslatePipe],
  templateUrl: './bs-bullets.component.html',
  styleUrl: './bs-bullets.component.scss',
})
export class BsBulletsComponent implements OnInit {
  pathToBullets = input.required<string>();
  countBullets: number = 0;
  // A array of all question IDs
  bulletsId: number[] = [];

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.countBullets = this.GetCountBullets(this.pathToBullets());
    // Add all bullet IDs to one array
    for (let i = 1; i <= this.countBullets; i++) {
      this.bulletsId.push(i);
    }

    this.logger.log('>> pathToBullets: ' + this.pathToBullets());
    this.logger.log('>> countBullets: ' + this.countBullets);
  }

  // Get the count of questions from the JSON file
  GetCountBullets(pathToBullets: string): number {
    const keys = pathToBullets.split('.');
    let bullets: any = de;

    for (const key of keys) {
      bullets = bullets?.[key];
      if (!bullets) {
        this.logger.error(`-> Path to questions not found: ${pathToBullets}`);
        return 0;
      }
    }
    return Object.keys(bullets).length;
  }
}
