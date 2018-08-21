import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";
 
 
@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8080/auth';
    private headers = new Headers({'Content-Type': 'application/json'});
 
    constructor(private http: Http) {
    }
 
    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers}).pipe(
            map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    // let tokenInfo = this.getDecodedAccessToken(token); // decode token
                    // localStorage.setItem('authorities', JSON.stringify(tokenInfo.authorities));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            }), 
            catchError((error:any) => Observable.throw(error.json().error || 'Server error'))
        );
    }
 
    getToken(token): string{
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.getDecodedAccessToken;
      return token ? token : null;
    }
 
    logout(): any {
        try{
            if(localStorage.getItem('currentUser')){
                return true;
            }
            else {
                return false;
            }
        }
        catch(Error){
            return false;
        }
    }

    getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
      }
    
      isAuthenticated() {
        // get the auth token from localStorage
        let token = localStorage.getItem('currentUser');
        // check if token is set, then...
        if (token) {
            return true;
        }
        return false;
    }

}