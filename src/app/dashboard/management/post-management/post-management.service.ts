import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from "@angular/http";
import { AuthenticationService } from '../../../authentication.service';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class PostManagementService {
    private postManagementUrl = 'https://backend-puma-dev.herokuapp.com/sec/post/listAll';

    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {}


    getPosts(){
        let tokenParse = this.authenticationService.getTokenToHeaders();

        const headers =  new Headers({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + tokenParse
            })

        return this.http.get(this.postManagementUrl, {headers: headers}).pipe(
            map(res => res.json())
        );
        }
}
