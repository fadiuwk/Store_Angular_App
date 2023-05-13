import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root',
})

export class UserGuard implements CanActivate, CanActivateChild {

    constructor(
        private route: Router,
        private _AuthService: AuthService
    ) {
    }

    private readonly getRole = this._AuthService.checkRole() ;


    canActivateChild(): any {
        if (this.getRole === "UXX") return true
        return this.route.navigate([''])
    }

    canActivate(): any {
        if (this.getRole === "UXX") return true
        return this.route.navigate([''])
    }

}