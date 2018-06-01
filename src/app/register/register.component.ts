import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module'
import { User } from '../models/user.model';
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

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

  onClick() {
    this.userService.createUser().subscribe(
      data => {
        alert("user created");
      }
    );
  }
}
