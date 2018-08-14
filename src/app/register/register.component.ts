import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module'
import { User, DegreeOptions } from '../models/user.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {NgForm} from '@angular/forms';
import { RegisterService } from '../register/register.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import { INVALID } from '@angular/forms/src/model';
import { NavbarService } from '../navbar/navbar.service';

@Injectable()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor( public nav: NavbarService, private registerService : RegisterService) {
  }

  public cpfmask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-' , /\d/, /\d/];
  public cellphonemask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public phonemask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  user: User = new User();
  degreeOptions: Array<Object> = DegreeOptions;
  hide = true;
  hideConfirm = true;

  cep = new FormControl('', [Validators.required]); //
  fullAddress = new FormControl('', [Validators.required]); //
  username = new FormControl('', [Validators.required]); //
  name = new FormControl('', [Validators.required]); //
  email = new FormControl('', [Validators.required, Validators.email]); //
  education = new FormControl('', [Validators.required]); //
  profession = new FormControl('', [Validators.required]); //
  phonePrincipal = new FormControl('', [Validators.required]); //
  phoneAlternative = new FormControl('', [Validators.required]); //

  // errorMessageName: string;
  // errorMessageDegree: string;
  // errorMessageProfession: string;

  // getErrorMessageName() {
  //   this.errorMessageName = 'Campo Obrigatório';
  //   if(this.name.hasError('required')){
  //     return this.errorMessageName;
  //   }
  // }

  // getErrorMessageCpf() {
  //   return this.cpf.hasError('required') ? 'Campo Obrigatório' :
  //       this.cpf.hasError('cpf') ? 'CPF inválido.' :
  //           '';
  // }

  // getErrorMessagePhone1() {
  //   return this.phone1.hasError('required') ? 'Campo Obrigatório' :
  //       this.phone1.hasError('phone1') ? 'Telefone inválido.' :
  //           '';
  // }

  // getErrorMessagePhone2() {
  //   return this.phone2.hasError('required') ? 'Campo Obrigatório' :
  //       this.phone2.hasError('phone2') ? 'Campo Obrigatório' :
  //           '';
  // }

  // getErrorMessageEmail() {
  //   return this.email.hasError('required') ? 'Campo Obrigatório e e-mail deve estar no formato usuario@email.com.' :
  //       this.email.hasError('email') ? 'Email deve estar no formato usuario@email.com.' :
  //           '';
  // }

  // getErrorMessageDegree() {
  //   this.errorMessageDegree = 'Selecione uma opção.';
  //   if(this.degree.hasError('required')){
  //     return this.errorMessageDegree;
  //   }
  // }

  // getErrorMessageProfession() {
  //   this.errorMessageProfession = 'Senha deve ter no mínimo 6 carácteres';
  //   if(this.profession.hasError('required')){
  //     return this.errorMessageProfession;
  //   }
  // }

  // getErrorMessagePassword2() {
  //   this.errorMessageProfession = 'Campo Obrigatório';
  //   if(this.profession.hasError('required')){
  //     return this.errorMessageProfession;
  //   }
  // }
  // getErrorMessagePassword1() {
  //   return this.errorMessageProfession;
  // }

  // getErrorMessagePasswordConfirm() {
  //   return this.errorMessageProfession;
  // }

  ngOnInit() {
    this.nav.show();
    this.nav.showLogin();
    this.nav.hideRegister();
  }

   createUser() {
     console.log(this.user);
     this.registerService.createUser(this.user)
         .subscribe( data => {
           alert("Usuário Criado com Sucesso.");
         });
       };
}
