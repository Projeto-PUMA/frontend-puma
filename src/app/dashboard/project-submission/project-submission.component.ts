import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {RequestOptions, Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, pspOptions, Psp, pspSubOptions } from 'src/app/models/project.model';
@Component({
  selector: 'app-project-submission',
  templateUrl: './project-submission.component.html',
  styleUrls: ['./project-submission.component.css']
})
export class ProjectSubmissionComponent implements OnInit {

  public cnpjmask = [/\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-' , /\d/, /\d/];

  submission: Project = new Project();
  pspNumbers: Psp[] = pspOptions;
  pspSubOption: Array<Object> = pspSubOptions;
  iterationPsp = [0, 1, 2, 3, 4, 5, 6];
  
  title = new FormControl('', [Validators.required]); //
  resume = new FormControl('', [Validators.required]); //
  problem = new FormControl('', [Validators.required]); //
  personType = new FormControl('', [Validators.required]); //
  cnpj = new FormControl('', [Validators.required]); //
  applicationArea = new FormControl('', [Validators.required]); //
  subArea = new FormControl('', [Validators.required]); //
  socialReason = new FormControl('', [Validators.required]); //
  fantasyName = new FormControl('', [Validators.required]); //

  errorMessageTitle: string;
  errorMessageResume: string;
  errorMessageProblem: string;
  errorMessagePersonType: string;
  errorMessageCNPJ: string;
  errorMessageApplicationArea: string;
  errorMessageSubArea: string;
  errorMessageSocialReason: string;
  errorMessageFantasyName: string;

  constructor(
    public nav: NavbarService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.nav.show();
    this.nav.showLogin();
    this.nav.showRegister();
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
}
getErrorMessageTitle() {
  this.errorMessageTitle = 'Campo Obrigatório';
  if(this.title.hasError('required')){
    return this.errorMessageTitle;
  }
}
getErrorMessageResume() {
  this.errorMessageResume = 'Campo Obrigatório';
  if(this.resume.hasError('required')){
    return this.errorMessageResume;
  }
}
getErrorMessageProblem() {
  this.errorMessageProblem = 'Campo Obrigatório';
  if(this.problem.hasError('required')){
    return this.errorMessageProblem;
  }
}
getErrorMessagePersonType() {
  this.errorMessagePersonType = 'Campo Obrigatório';
  if(this.personType.hasError('required')){
    return this.errorMessagePersonType;
  }
}
getErrorMessageFantasyName() {
  this.errorMessageFantasyName = 'Campo Obrigatório';
  if(this.fantasyName.hasError('required')){
    return this.errorMessageFantasyName;
  }
}
getErrorMessageSocialReason() {
  this.errorMessageSocialReason = 'Campo Obrigatório';
  if(this.socialReason.hasError('required')){
    return this.errorMessageSocialReason;
  }
}
getErrorMessageCNPJ() {
  this.errorMessageCNPJ = 'Campo Obrigatório';
  if(this.cnpj.hasError('required')){
    return this.errorMessageCNPJ;
  }
}
getErrorMessagePsp() {
  this.errorMessageApplicationArea = 'Campo Obrigatório';
  if(this.applicationArea.hasError('required')){
    return this.errorMessageApplicationArea;
  }
}
getErrorMessagePspType() {
  this.errorMessageSubArea = 'Campo Obrigatório';
  if(this.subArea.hasError('required')){
    return this.errorMessageSubArea;
  }
}


}
