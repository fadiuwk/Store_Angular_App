import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private route: Router,
    private _AuthService: AuthService
  ) { }

  private readonly getRole = this._AuthService.checkRole() as "XAX" | "UXX";

  pathRoute :string = '';

  roleRoute = {
    XAX:"admin",
    UXX: "home"
  }


  canActivateChild(): any {

    this.pathRoute =  this.roleRoute[this.getRole];
    if(!this.pathRoute) return true
    return this.route.createUrlTree([this.pathRoute])
  }

  canActivate(): any {
    
    this.pathRoute=  this.roleRoute[this.getRole];
    if(!this.pathRoute) return true
    return this.route.createUrlTree([this.pathRoute])
  }

}

