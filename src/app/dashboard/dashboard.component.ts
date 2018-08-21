import { Component } from '@angular/core';
import { NavbarDashboardService } from './navbar-dashboard/navbar-dashboard.service';
import { SidebarDashboardService } from './sidebar-dashboard/sidebar-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public nav: NavbarDashboardService, public side: SidebarDashboardService) { }

  ngOnInit() {
    this.side.show();
     this.nav.show();
    this.nav.showLogout();
  }
}
