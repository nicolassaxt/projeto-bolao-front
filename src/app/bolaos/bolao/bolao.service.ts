import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Bolao } from './bolao';
import { catchError, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { User } from '../../core/user/user';

const API = 'http://localhost:8080'

@Injectable({providedIn: 'root'})
export class BolaoService{

  constructor(private http: HttpClient){

  }

  list(){
    return this.http.get<Bolao[]>(API +'/partida')
    .pipe(
      tap(console.log)
    )
  }

  listFromUser(userName: string){
    return this.http
      .get<Bolao []>( API +'/partida');
  }

  listFromUserPaginated(userName: string, page: number){
    const params = new HttpParams()
    .append('page', page.toString());

    return this.http
      .get<Bolao []>( API +'/partida', {params});
  }

  findById(bolaoId: number) {

    return this.http.get<Bolao>(API + '/partida/' + bolaoId);
}

  vitoriaA(bolaoId: number){
    return this.http.post(
      API +'/aposta', {"status": "TIMEA","usuarioId": 2,"partidaId": bolaoId}, {observe: 'response'} //terceiro paramentro para pegar o status do retorno: 200, 304 ...
    )
    .pipe(map(res => true))
    .pipe(catchError( err =>{
      return err.status == '304' ? of(false) : throwError(err);
    }));

  }

  empate(bolaoId: number){
    return this.http.post(
      API +'/aposta', {"status": "EMPATE","usuarioId": 2,"partidaId": bolaoId}, {observe: 'response'} //terceiro paramentro para pegar o status do retorno: 200, 304 ...
    )
    .pipe(map(res => true))
    .pipe(catchError( err =>{
      return err.status == '304' ? of(false) : throwError(err);
    }));

  }

  votoriaB(bolaoId: number){
    return this.http.post(
      API +'/aposta', {"status": "TIMEB","usuarioId": 2,"partidaId": bolaoId}, {observe: 'response'} //terceiro paramentro para pegar o status do retorno: 200, 304 ...
    )
    .pipe(map(res => true))
    .pipe(catchError( err =>{
      return err.status == '304' ? of(false) : throwError(err);
    }));

  }
}
