import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";
import { AuthenticationService } from '../../../authentication.service';
import { Post, Author } from '../../../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostManagementService {
    private postManagementUrl = 'http://localhost:8080/sec/post/listAll';

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {}


    public getPosts(){
        let tokenParse = this.authenticationService.getTokenToHeaders();

        const headers =  new Headers({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + tokenParse
            })

        return this.http.get(this.postManagementUrl, {headers: headers});
        //return this.http.post(this.postManagementUrl, post, {headers : headers})
    }

}
