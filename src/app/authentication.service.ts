import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";
 
 
@Injectable()
export class AuthenticationService {
    private authUrl = 'https://backend-puma-dev.herokuapp.com/auth';
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
                    localStorage.setItem('currentUser', JSON.stringify({token: token }));
                    let tokenInfo = this.getDecodedAccessToken(token); // decode token
                    console.log(tokenInfo);
                    localStorage.removeItem('authorities');
                    localStorage.setItem('authorities', JSON.stringify(tokenInfo.authorities));
                    console.log(this.getToken());
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
 
    getToken(): String{
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : null;
    }

    getTokenToHeaders(): string {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser.token;
        return token ? token : "";
      }
  
 
    logout(): any {
        try{
            if(localStorage.getItem('currentUser')){
                localStorage.removeItem('authorities');
                localStorage.removeItem('currentUser');
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

    getUserId(): number{
        try{
            let token = this.getToken();
            let tokenInfo = jwt_decode(token);
            return tokenInfo.id;
        }
        catch(Error){
            return null;
        }
    }

}
