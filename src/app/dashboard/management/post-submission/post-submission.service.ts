import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";
import { AuthenticationService } from '../../../authentication.service';
import { Post, Author } from '../../../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostSubmissionService {
    private postSubmissionUrl = 'https://puma-backend-dev.herokuapp.com/sec/post/new';
    
    constructor(    
        private http: Http,
        private authenticationService: AuthenticationService) {}

          
    create(post: Post){
        let tokenParse = this.authenticationService.getTokenToHeaders();

        const headers =  new Headers({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + tokenParse
            })
          
        console.log(JSON.stringify(headers));

        return this.http
            .post(this.postSubmissionUrl, post, {headers : headers})
    }
    
}


// create(title, text) {
//     let headers: HttpHeaders = new HttpHeaders();
//     headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//     headers.append('Authorization', token);
//     return this.http.post('http://myapi/api.php/posts', {
//       title: 'added title',
//       text: 'added text'
//     }, { headers });
//   }


          // return this.http.post<Post>(this.postSubmissionUrl, {header:'headers', post});
