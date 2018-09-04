import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProjectSubmissionComponent} from './dashboard/project-submission/project-submission.component';
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';
import { PostSubmissionComponent } from './dashboard/management/post-submission/post-submission.component';
const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent
  },
  {
     path: 'register', 
     component: RegisterComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth/dashboard',
    canActivate: [AuthGuardService], 
    component: DashboardComponent, 
    children:[
      {
        path:'projectSubmission', 
        component: ProjectSubmissionComponent
      },
      {
        path:'management/submitPost',
        component: PostSubmissionComponent,
        canActivate: [RoleGuardService],
        data: {
          expectedRole: 'ROLE_ADMIN'
        }
      }
    ]
  }
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
