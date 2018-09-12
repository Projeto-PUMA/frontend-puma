import { Component, OnInit } from '@angular/core';
import { NavbarDashboardService } from './navbar-dashboard.service';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css'],
})
export class NavbarDashboardComponent implements OnInit {

  constructor(public nav: NavbarDashboardService, private authenticationService: AuthenticationService, private router: Router ) { }

  
  ngOnInit() {
  }

  logout(){
    if (this.authenticationService.logout()) {
      this.router.navigate(['/']);
  } else {
      console.log("erro")
  }

  }
}
