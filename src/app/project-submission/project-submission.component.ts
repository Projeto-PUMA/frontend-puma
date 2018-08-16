import { Component, OnInit } from '@angular/core';
import {RequestOptions, Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NavbarService } from '../navbar/navbar.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project, pspOptions, Psp, pspSubOptions } from '../models/project.model';
@Component({
  selector: 'app-project-submission',
  templateUrl: './project-submission.component.html',
  styleUrls: ['./project-submission.component.css']
})
export class ProjectSubmissionComponent implements OnInit {

  public cnpjmask = [/([0-9]{2})/, '.', /(\d{3})/, /(\d{3})/, '/', /(\d{4})/, '-', /(\d{2})/];

  submission: Project = new Project();
  pspNumbers: Psp[] = pspOptions;
  pspSubOption: Array<Object> = pspSubOptions;
  iterationPsp = [0, 1, 2, 3, 4, 5, 6];


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

}
