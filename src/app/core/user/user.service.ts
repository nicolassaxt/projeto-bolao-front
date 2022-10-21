import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import jwtDecode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService{

  private userSubject = new BehaviorSubject<User>({id:0, name:'',email:''});
  private userName!: string;

  constructor(private tokenService: TokenService){

    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){ //decodificando token e disponibilizar o user
    const token = this.tokenService.getToken();
    const user = jwtDecode(token!) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null!)
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

  getUserName(){ 
    return this.userName;
  }
}
