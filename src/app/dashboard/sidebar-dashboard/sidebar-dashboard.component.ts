import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SidebarDashboardService } from './sidebar-dashboard.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.css']
})
export class SidebarDashboardComponent implements OnInit {

  constructor(public side: SidebarDashboardService) {
  }
  
  ngOnInit(){
  }
}
