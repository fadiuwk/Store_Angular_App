import { Component } from '@angular/core';
import { LanguageService } from './modules/shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Store_Angular_App';
  currentLang !: string

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.currentLang = this.languageService.getCurrentLang() || 'ar';

    this.languageService.updateLanguage(this.currentLang);
  }

}
