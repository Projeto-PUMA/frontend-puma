import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import { UserService } from './user/user.service';
import { AdminService } from './user/admin/admin.service';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { RegisterService } from './register/register.service';
import { MatSelectModule, MatOptionModule, MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { StudentComponent } from './user/student/student.component';
import { AdminComponent } from './user/admin/admin.component';
import { ExternalAgentComponent } from './user/external-agent/external-agent.component';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbdCarouselConfig } from './home/carousel-slider/carousel-slider.component';
import { LayoutModule } from '@angular/cdk/layout';
import {LoginComponent} from './login/login.component'
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    StudentComponent,
    AdminComponent,
    ExternalAgentComponent,
    NgbdCarouselConfig,
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
  ],
  providers: [UserService, RegisterService, AdminService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
