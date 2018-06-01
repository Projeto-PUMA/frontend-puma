import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module'
import { User } from '../models/user.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import { UserService } from '../user/user.service';
@Injectable()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    
  }
}
