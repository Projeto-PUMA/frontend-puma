import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module'
import { User, DegreeOptions } from '../models/user.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {NgForm} from '@angular/forms';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  degreeOptions: Array<Object> = DegreeOptions;
  hide = true;
  hideConfirm = true;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  createUser(): void {
   // this.degreeOptions = this.user.degree;
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

      };
}
