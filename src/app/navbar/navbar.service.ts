import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;
  loginVisible:boolean
  registerVisible:boolean

  constructor() {  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  hideLogin() { this.loginVisible = false; }

  showLogin() { this.loginVisible = true; }

  hideRegister() { this.registerVisible = false; }

  showRegister() { this.registerVisible = true; }
}
