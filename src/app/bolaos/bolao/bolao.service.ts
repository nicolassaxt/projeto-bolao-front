import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Bolao } from './bolao';

const API = 'http://localhost:3001'

@Injectable({providedIn: 'root'})
export class BolaoService{

  constructor(private http: HttpClient){

  }

  listFromUser(userName: string){
    return this.http
      .get<Bolao []>( API +'/partidas');
  }

  listFromUserPaginated(userName: string, page: number){
    const params = new HttpParams()
    .append('page', page.toString());

    return this.http
      .get<Bolao []>( API +'/partidas', {params});
  }
}
