import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";



@Injectable({
  providedIn: 'root'
})
export class ApplicationGuardService implements CanActivate {

  constructor(
    private authService: AuthService
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return this.authService.isUserLoggedAndAccessTokenValid();
  }
}
