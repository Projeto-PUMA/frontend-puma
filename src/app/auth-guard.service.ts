import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthenticationService) {}

    canActivate() {
        // Check to see if a user has a valid token
        if (this.authService.isAuthenticated()) {
            // If they do, return true and allow the user to load app
            console.log('passou aki');
            return true;
        }
        // If not, they redirect them to the login page
        this.router.navigate(['/login']);
        return false;
    }


}
