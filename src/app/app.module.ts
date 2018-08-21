import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { RegisterService } from './register/register.service';
import { MatSelectModule, MatOptionModule, MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatRadioModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbdCarouselConfig } from './landing/carousel-slider/carousel-slider.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProjectSubmissionComponent } from './dashboard/project-submission/project-submission.component';
import {LoginComponent} from './login/login.component'
import { AuthenticationService } from './authentication.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarService } from './navbar/navbar.service';
// import { DashboardService } from './dashboard/dashboard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarDashboardComponent } from './dashboard/navbar-dashboard/navbar-dashboard.component'; 
import { NavbarDashboardService } from './dashboard/navbar-dashboard/navbar-dashboard.service';
import { SidebarDashboardComponent } from './dashboard/sidebar-dashboard/sidebar-dashboard.component'
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';
import { ManagementComponent } from './dashboard/management/management.component'
import { PostManagementComponent } from './dashboard/management/post-management/post-management.component';
import { PostSubmissionComponent } from './dashboard/management/post-submission/post-submission.component';
import { SidebarDashboardService } from './dashboard/sidebar-dashboard/sidebar-dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NgbdCarouselConfig,
    ProjectSubmissionComponent,
    NavbarComponent,
    LandingComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    SidebarDashboardComponent,
    ManagementComponent,
    PostManagementComponent,
    PostSubmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    TextMaskModule,
    NgbModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [RegisterService, AuthenticationService, NavbarService, NavbarDashboardService, SidebarDashboardService, AuthGuardService, RoleGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

