import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';

import { AuthenticationService } from './authentication.service';
import * as jwt_decode from "jwt-decode";

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    let token = localStorage.getItem('currentUser');
    // decode the token to get its payload
    const tokenPayload = this.auth.getDecodedAccessToken(token);
    const tokenRoles = JSON.stringify(tokenPayload.authorities);
    console.log("passou aki");
    console.log(tokenRoles);
    if (
      !this.auth.isAuthenticated() || 
      !tokenRoles.includes(expectedRole)
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
