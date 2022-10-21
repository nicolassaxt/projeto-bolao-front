import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { BolaoService } from '../bolao/bolao.service';
import { Bolao } from '../bolao/bolao';

@Injectable({ providedIn: 'root'})
export class BolaoListResolver implements Resolve<Observable<Bolao[]>>{

  constructor(private service: BolaoService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bolao[]> | Observable<Observable<Bolao[]>> | Promise<Observable<Bolao[]>> {
    const userName = route.params['userName'];

    return this.service.listFromUserPaginated(userName, 1)
  }
}
