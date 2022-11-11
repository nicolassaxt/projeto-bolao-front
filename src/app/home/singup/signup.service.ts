import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { Users } from '../../bolaos/bolao-list-users/users';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/user';

@Injectable()
export class SignUpService{

  constructor(private http: HttpClient){}

  register(username: string, user_email: string,  user_full_name: string, user_password: string): Observable<any> {
    console.log(user_password)
    return this.http.post(API, {username, user_email, user_full_name, user_password});
  }
}
