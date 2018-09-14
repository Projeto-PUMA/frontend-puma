import { Injectable } from '@angular/core';

@Injectable()
export class NavbarDashboardService {
  visible: boolean;
  logoutVisible:boolean
  registerVisible:boolean

  constructor() {  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  hideLogout() { this.logoutVisible = false; }

  showLogout() { this.logoutVisible = true; }

}
