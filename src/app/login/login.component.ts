import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthenticationService } from '../authentication.service';
import { NavbarService } from '../navbar/navbar.service';
 
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    hide = true;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        public nav: NavbarService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.nav.show();
        this.nav.hideLogin();
        this.nav.showRegister();
        localStorage.removeItem('authorities');
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/auth/dashboard']);
                } else {
                    // login failed
                    this.error = 'CPF ou Senha Incorreta';
                    this.loading = false;
                }
            }, error => {
              this.loading = false;
              this.error = error;
            });
    }
}