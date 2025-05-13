import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from './logger.service';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly availableLanguages: string[] = ['de'];
  private defaultLanguage: string = 'de';

  constructor(
    private translate: TranslateService,
    private logger: LoggerService
  ) {
    this.translate.addLangs(this.availableLanguages);
    this.translate.setDefaultLang(this.defaultLanguage);
    this.setLanguage(this.defaultLanguage);
    this.logger.log(`-> Default language set to ${this.defaultLanguage}`);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  getAvailableLanguages(): string[] {
    return this.availableLanguages;
  }

  // Perhaps just delete this method
  // getLanguage(): string {
  //   return localStorage.getItem('language') || this.defaultLanguage;
  // }
}
