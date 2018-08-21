import { Component, OnInit } from '@angular/core';
import { NavbarDashboardService } from './navbar-dashboard.service';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css'],
})
export class NavbarDashboardComponent implements OnInit {

  constructor(public nav: NavbarDashboardService) { }

  ngOnInit() {
  }

}
