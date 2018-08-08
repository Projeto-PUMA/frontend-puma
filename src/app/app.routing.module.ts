import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './user/admin/admin.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent},
  {path:'login', component: LoginComponent}
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
