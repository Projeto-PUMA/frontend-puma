import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
