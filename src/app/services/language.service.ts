import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  setDefaultLang(lang: string) {

      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
  }
  constructor(
    private translate: TranslateService,
  ) {

    this.setDefaultLang('az');

   }

  // switch language
  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

}
