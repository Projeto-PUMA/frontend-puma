import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

	private userUrl = '/users';

  public getUsers() {
    console.log(this.http.get<User[]>(this.userUrl));
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser() {
    let user: User = new User();
    user.name = "teste23";
    user.email = "izaribeiro43@gmail.com";
    return this.http.post<User>(this.userUrl, user);
  }

}
