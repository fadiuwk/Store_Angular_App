import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";

export class AdminGuard implements CanActivate, CanActivateChild {

    constructor(
        private route: Router,
        private _AuthService: AuthService
    ) { }

    canActivateChild(): any {
        if (this._AuthService.checkRole() == "admin") return true;
        else if (this._AuthService.checkRole() == "user") {
            return this.route.createUrlTree(['home']);
        }
        else if (this._AuthService.checkRole() == null) {
            return this.route.createUrlTree(['/']);
        }
    }

    canActivate(): any {
        if (this._AuthService.checkRole() == "admin") return true;
        else if (this._AuthService.checkRole() == "user") {
            return this.route.createUrlTree(['home']);
        }
        else if (this._AuthService.checkRole() == null) {
            return this.route.createUrlTree(['/']);
        }
    }

}