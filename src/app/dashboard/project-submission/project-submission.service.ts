import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";
import { AuthenticationService } from '../../authentication.service';
import { Project, pspOptions, Psp, pspSubOptions/*, Author*/ } from 'src/app/models/project.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProjectSubmissionService {
    private projectSubmissionUrl = 'http://localhost:8080/sec/project/new/';
    
    constructor(   
        private http: Http,
        private authenticationService: AuthenticationService) {}

          
    create(submission: Project){
        let tokenParse = this.authenticationService.getTokenToHeaders();

        const headers =  new Headers({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + tokenParse
            })
          
        console.log(JSON.stringify(headers));

        return this.http
            .post(this.projectSubmissionUrl, submission, {headers : headers})
    }
    
}
