import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bolao } from '../bolao/bolao';
import { BolaoService } from '../bolao/bolao.service';
import { Observable } from 'rxjs';
import { User } from '../../core/user/user';
import { UserService } from '../../core/user/user.service';
import { AlertService } from '../../shared/components/alert/alert.service';

@Component({
  templateUrl: 'bolao-partidas.component.html'
})
export class BolaoPartidasComponent implements OnInit{

  bolao$!: Observable<Bolao>;
  user$!: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private bolaoService: BolaoService,
    private router: Router,
    private alertService: AlertService
    ){}


  ngOnInit(): void {
    this.bolao$ = this.bolaoService.findById(this.route.snapshot.params['partidaId'])//recebendo id do router app

  }

  vitoriaA(bolao: Bolao){
    this.bolaoService.vitoriaA(bolao.id)
    .subscribe(vitoria =>{
      if(vitoria){
        this.bolao$ = this.bolaoService.findById(bolao.id);
      }
      this.alertService.success("Aposta Feita!")
      this.router.navigate([''])
    },
    err =>{
      console.log(err);
      this.alertService.warning("Aposta não foi feita")
    }
    );
  }

  empate(bolao: Bolao){
    this.bolaoService.empate(bolao.id)
    .subscribe(empate =>{
      if(empate){
        this.bolao$ = this.bolaoService.findById(bolao.id);
      }
      this.alertService.success("Aposta Feita!")
      this.router.navigate([''])
    },
    err =>{
      console.log(err);
      this.alertService.warning("Aposta não foi feita")
    }
    );
  }

  votoriaB(bolao: Bolao){
    this.bolaoService.votoriaB(bolao.id)
    .subscribe(derrota =>{
      if(derrota){
        this.bolao$ = this.bolaoService.findById(bolao.id);
      }
      this.alertService.success("Aposta Feita!")
      this.router.navigate([''])
    },
    err =>{
      console.log(err);
      this.alertService.warning("Aposta não foi feita")
    }
    );
  }
}
