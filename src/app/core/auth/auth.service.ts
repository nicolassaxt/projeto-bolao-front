import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';


const API = 'https://bolao-back-java.herokuapp.com'

const TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2NjgxMjY4NTYsImV4cCI6MTY2ODQ4Njg1NiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSUyIsIlJPTEVfTUFOQUdFUlMiXX0.eufGUQoATrMK1bgUI-rC0Zyo2hUEZyO540CZ4JyY46HR_foWzKbYAZNkn2VO5lUU1V5EVt3h5I4JvKn6FBwoKQ';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  authenticate(username: string, password: string){
    return this.http
      .post(API + '/login',{username, password},{observe: 'response'}
      )
      .pipe(tap(res =>{
        const authToken = res.headers.get('x-access-token') ?? TOKEN
        this.userService.setToken(authToken!);
      }));
  }
}
