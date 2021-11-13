import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import decode from 'jwt-decode';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
              private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

  // const tokenPayload = decode(this._authService.getAccessToken());
    if (
      !this._authService.isAuthenticated()
    ) {
      this._router.navigate(['']);
      return false;
    }
    return true;
  }
}
