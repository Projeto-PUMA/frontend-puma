import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {RequestOptions, Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { NavbarService } from 'src/app/navbar/navbar.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, pspOptions, Psp, pspSubOptions, Author, ProjectAuthorCategory, ProjectArea, ProjectSubArea, ProjectStatus } from 'src/app/models/project.model';
import { ProjectSubmissionService } from './project-submission.service';

@Component({
  selector: 'app-project-submission',
  templateUrl: './project-submission.component.html',
  styleUrls: ['./project-submission.component.css']
})
export class ProjectSubmissionComponent implements OnInit {

  author: Author = new Author();
  projectAuthorCategory: ProjectAuthorCategory = new ProjectAuthorCategory();
  projectArea: ProjectArea = new ProjectArea();
  projectSubArea: ProjectSubArea = new ProjectSubArea();
  projectStatus: ProjectStatus = new ProjectStatus();

  public cnpjmask = [/\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-' , /\d/, /\d/];

  submission: Project = new Project();
  pspNumbers: Psp[] = pspOptions;
  pspSubOption: Array<Object> = pspSubOptions;
  iterationPsp = [0, 1, 2, 3, 4, 5, 6];

  title = new FormControl('', [Validators.required]); //
  summary = new FormControl('', [Validators.required]); //
  body = new FormControl('', [Validators.required]); //
  personType = new FormControl('', [Validators.required]); //
  cnpj = new FormControl('', [Validators.required]); //
  // projectSubArea = new FormControl('', [Validators.required]); //
  subArea = new FormControl('', [Validators.required]); //
  socialReason = new FormControl('', [Validators.required]); //
  fantasyName = new FormControl('', [Validators.required]); //

  errorMessageTitle: string;
  errorMessageSummary: string;
  errorMessageBody: string;
  errorMessagePersonType: string;
  errorMessageCNPJ: string;
  errorMessageApplicationArea: string;
  errorMessageSubArea: string;
  errorMessageSocialReason: string;
  errorMessageFantasyName: string;

  constructor( private projectSubmissionService: ProjectSubmissionService,
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
getErrorMessageSummary() {
  this.errorMessageSummary = 'Campo Obrigatório';
  if(this.summary.hasError('required')){
    return this.errorMessageSummary;
  }
}
getErrorMessageBody() {
  this.errorMessageBody = 'Campo Obrigatório';
  if(this.body.hasError('required')){
    return this.errorMessageBody;
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
  // this.errorMessageApplicationArea = 'Campo Obrigatório';
  // if(this.projectSubArea.hasError('required')){
  //   return this.errorMessageApplicationArea;
  // }
}
getErrorMessagePspType() {
  this.errorMessageSubArea = 'Campo Obrigatório';
  if(this.subArea.hasError('required')){
    return this.errorMessageSubArea;
  }
}

createProject(){
  this.projectAuthorCategory.id = 1;
  this.projectArea.id = 1;
  this.projectStatus.id = 1;
  this.projectSubArea.id = 1;

  this.author.id = this.authenticationService.getUserId();
  this.submission.author = this.author;
  this.submission.projectAuthorCategory = this.projectAuthorCategory;
  this.submission.projectStatus = this.projectStatus;
  this.submission.projectArea = this.projectArea;
  this.submission.projectSubArea = this.projectSubArea;

  console.log(JSON.stringify(this.submission));
  this.projectSubmissionService.create(this.submission)
  .subscribe( () => {
      alert("Projeto Criado com Sucesso.");
    });

}

}
