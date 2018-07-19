import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from "@angular/common/http";
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { RegisterService } from './register/register.service';
import { MatSelectModule, MatOptionModule, MatIconModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
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
    MatIconModule
  ],
  providers: [UserService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
