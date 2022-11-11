import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, tap } from 'rxjs';
import { Users } from './users';


@Injectable({providedIn: 'root'})
export class BolaoListUserService{
  //Part3 cap 3 aula 1
  private readonly API = 'http://localhost:8080/user';

  constructor(private http: HttpClient){ }

  list(){
    return this.http.get<Users[]>(this.API) 
    .pipe(
      tap(console.log)
    )
  }
}

