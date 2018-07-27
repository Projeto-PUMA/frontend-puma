import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module'
import { User, DegreeOptions } from '../models/user.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {NgForm} from '@angular/forms';
import { UserService } from '../user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';

@Injectable()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public cpfmask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-' , /\d/, /\d/];
  public cellphonemask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public phonemask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  user: User = new User();
  degreeOptions: Array<Object> = DegreeOptions;
  hide = true;
  hideConfirm = true;
  constructor(private userService: UserService) {
  }
  name = new FormControl('', [Validators.required]);
  errorMessageName: string;
  cpf = new FormControl('', [Validators.required]);
  phone1 = new FormControl('', [Validators.required]);
  phone2 = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  degree = new FormControl('', [Validators.required]);
  errorMessageDegree: string;
  profession = new FormControl('', [Validators.required]);
  errorMessageProfession: string;

  getErrorMessageName() {
    this.errorMessageName = 'Campo não pode ser vazio.';
    if(this.name.hasError('required')){
      return this.errorMessageName;
    }
  }
  
  getErrorMessageCpf() {
    return this.cpf.hasError('required') ? 'Campo não pode ser vazio.' :
        this.cpf.hasError('cpf') ? 'CPF inválido.' :
            '';
  }

  getErrorMessagePhone1() {
    return this.phone1.hasError('required') ? 'Campo não pode ser vazio.' :
        this.phone1.hasError('phone1') ? 'Telefone inválido.' :
            '';
  }

  getErrorMessagePhone2() {
    return this.phone2.hasError('required') ? 'Campo não pode ser vazio.' :
        this.phone2.hasError('phone2') ? 'Telefone inválido.' :
            '';
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Campo não pode ser vazio.' :
        this.email.hasError('email') ? 'Email deve estar no formato usuario@email.com.' :
            '';
  }

  getErrorMessageDegree() {
    this.errorMessageDegree = 'Selecione uma opção.';
    if(this.degree.hasError('required')){
      return this.errorMessageDegree;
    }
  }

  getErrorMessageProfession() {
    this.errorMessageProfession = 'Campo não pode ser vazio.';
    if(this.profession.hasError('required')){
      return this.errorMessageProfession;
    }
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
