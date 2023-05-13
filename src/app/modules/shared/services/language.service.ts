import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) { }


  updateLanguage(userLang: string) {
    localStorage.setItem("myLanguage", userLang);
    this.setStyleLanguage(userLang)
  }

  setStyleLanguage(lang: string) {
    this.translate.use(lang);
    this.document.documentElement.setAttribute('lang', lang);

    const dir = lang == 'ar' ? 'rtl' : 'ltr';
    this.document.documentElement.setAttribute('dir', dir);
    this.document.body.style.direction = dir
  }

  getCurrentLang() {
    return localStorage.getItem('myLanguage')
  }

  switchLang(lang: string) {
    localStorage.setItem("myLanguage", lang);
    this.setStyleLanguage(lang)
  }
}
