import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, tap } from 'rxjs';
import { Users } from './users';


@Injectable({providedIn: 'root'})
export class BolaoListUserService{
 
  private readonly API = 'https://bolao-back-java.herokuapp.com/user';

  constructor(private http: HttpClient){ }

  list(){
    return this.http.get<Users[]>(this.API)
    .pipe(
      tap(console.log)
    )
  }
}

