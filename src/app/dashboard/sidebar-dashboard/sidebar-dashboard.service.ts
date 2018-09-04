import { Injectable } from '@angular/core';

@Injectable()
export class SidebarDashboardService {
  visible: boolean;
  canShow: boolean;
  
  constructor() {  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  canShowItem(){
  let check =  localStorage.getItem('authorities');
    
    if (check.includes('ROLE_ADMIN')){
      console.log("admin true");
      this.canShow = true;
    }
    else{
      console.log("admin false");
      this.canShow = false;
    }
  }

}
