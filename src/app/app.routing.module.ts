import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component'
import { ProjectSubmissionComponent } from './project-submission/project-submission.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'submeterprojeto', component: ProjectSubmissionComponent },

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
