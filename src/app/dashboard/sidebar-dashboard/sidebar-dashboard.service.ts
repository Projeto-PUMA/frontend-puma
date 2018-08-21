import { Injectable } from '@angular/core';

@Injectable()
export class SidebarDashboardService {
  visible: boolean;

  constructor() {  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

}
