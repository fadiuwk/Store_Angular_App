import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  currentLang!: string;
  isLoggedIn: boolean = false;

  private readonly getRole = this._AuthService.checkRole() as "XAX" | "UXX";


  constructor(
    private route: Router,
    public languageService: LanguageService,
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private _AuthService:AuthService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.currentLang = this.languageService.getCurrentLang() || 'ar';
    this.isLoggedIn = (this.getRole == "XAX" || this.getRole == "UXX") ? true : false;
  }

  logout(){
    localStorage.removeItem("role");
    this.route.navigate(['login'])
  }

  
  switchLang(lang: string) {
    this.languageService.switchLang(lang);
    this.document.documentElement.lang = lang;
    this.currentLang = this.languageService.getCurrentLang() || 'ar';

  }
}
