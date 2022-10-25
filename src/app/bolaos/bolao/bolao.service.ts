import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Bolao } from './bolao';
import { catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

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

  findById(bolaoId: number) {

    return this.http.get<Bolao>(API + '/partidas/' + bolaoId);
}

  vitoria(bolaoId: number){
    return this.http.post(
      API +'/partidas/' + bolaoId+ '/vitoria', {}, {observe: 'response'} //terceiro paramentro para pegar o status do retorno: 200, 304 ...
    )
    .pipe(map(res => true))
    .pipe(catchError( err =>{
      return err.status == '304' ? of(false) : throwError(err);
    }));

  }

  empate(bolaoId: number){
    return this.http.post(
      API +'/partidas/' + bolaoId+ '/empate', {}, {observe: 'response'} //terceiro paramentro para pegar o status do retorno: 200, 304 ...
    )
    .pipe(map(res => true))
    .pipe(catchError( err =>{
      return err.status == '304' ? of(false) : throwError(err);
    }));

  }

  derrota(bolaoId: number){
    return this.http.post(
      API +'/partidas/' + bolaoId+ '/derrota', {}, {observe: 'response'} //terceiro paramentro para pegar o status do retorno: 200, 304 ...
    )
    .pipe(map(res => true))
    .pipe(catchError( err =>{
      return err.status == '304' ? of(false) : throwError(err);
    }));

  }
}
