import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

 
@Injectable()
export class AuthenticationService {
    private authUrl = 'https://backend-puma.herokuapp.com/auth';
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
 
    getToken(): String {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : "";
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}