import { Component, OnInit } from '@angular/core';
import { CsToolbarComponent } from '../../layouts/component-structures/cs-toolbar/cs-toolbar.component';
import { CsExternalCardComponent } from '../../layouts/component-structures/cs-external-card/cs-external-card.component';
import { getNestedValue } from '../../topics.config';
import deJson from '../../../../public/i18n/de.json';
import { LoggerService } from '../../core/logger.service';

@Component({
  selector: 'app-external-links-page',
  imports: [CsToolbarComponent, CsExternalCardComponent],
  templateUrl: './external-links-page.component.html',
  styleUrl: './external-links-page.component.scss',
})
export class ExternalLinksPageComponent implements OnInit {
  jsonPath = 'external_links_page';
  cardsJsonObjects: { key: string; value: any }[] = [];

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.getCardsFromJson(this.jsonPath);
    this.logger.log(`Loaded Json Objects: ${this.cardsJsonObjects.length}`);
  }

  getCardsFromJson(jsonPath: string) {
    const jsonObject = getNestedValue(deJson, jsonPath);
    Object.entries(jsonObject).forEach(([key, value]) => {
      this.cardsJsonObjects.push({ key, value });
    });
  }
}
