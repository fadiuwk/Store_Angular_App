import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuard implements CanActivate, CanActivateChild {

  constructor(
    private route: Router,
    private _AuthService: AuthService
  ) { }

  canActivateChild(): any {
    if (this._AuthService.checkRole() === null) return true;
    else if (this._AuthService.checkRole() === "user") {
      return this.route.createUrlTree(['home']);
    }
    else if (this._AuthService.checkRole() === "admin") {
      return this.route.createUrlTree(['admin']);
    }
  }

  canActivate(): any {
    if (this._AuthService.checkRole() === null) return true;
    else if (this._AuthService.checkRole() === "user") {
      return this.route.createUrlTree(['home']);
    }
    else if (this._AuthService.checkRole() === "admin") {
      return this.route.createUrlTree(['admin']);
    }
  }

}
