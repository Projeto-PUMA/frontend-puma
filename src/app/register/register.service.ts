import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {

  constructor(private http:HttpClient) {}

<<<<<<< HEAD
  private userUrl = 'https://backend-puma-dev.herokuapp.com/register';
=======
  private userUrl = 'http://localhost:8080/register';
>>>>>>> c1dbd24d50017b9d47b74e99a3cc7f277272a4b2

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
}
