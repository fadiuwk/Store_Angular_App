import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";

export class UserGuard implements CanActivate, CanActivateChild {

    constructor(
        private route: Router,
        private _AuthService: AuthService
    ) { }

    canActivateChild(): any {
        if (this._AuthService.checkRole() == "user") return true;
        else if (this._AuthService.checkRole() == "admin") {
            return this.route.createUrlTree(['admin']);
        }
        else if (this._AuthService.checkRole() == null) {
            return this.route.createUrlTree(['/']);
        }
    }

    canActivate(): any {
        if (this._AuthService.checkRole() == "user") return true;
        else if (this._AuthService.checkRole() == "admin") {
            return this.route.createUrlTree(['admin']);
        }
        else if (this._AuthService.checkRole() == null) {
            return this.route.createUrlTree(['/']);
        }
    }

}