import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Bolao } from '../../bolao/bolao';
import { BolaoService } from '../../bolao/bolao.service';

@Component({
  selector: 'pb-bolaos',
  templateUrl: './bolaos.component.html',
  styleUrls: ['./bolaos.component.css']
})
export class BolaosComponent implements OnChanges{

 @Input() bolaos: Bolao[] = [];
  rows: any[] = [];

  bolao$!: Observable<Bolao>;

  constructor(
    private bolaoService: BolaoService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['bolaos'])
    this.rows = this.groupColumns(this.bolaos);
  }



  groupColumns(bolaos: Bolao[]){ //fazendo divisão de linhas apenas para 3 componetes
    const newRows = [];

    for(let index = 0; index < bolaos.length; index+=3){
      newRows.push(bolaos.slice(index, index + 3));
    }

    return newRows;
  }

  vitoria(bolao: Bolao){
    this.bolaoService.vitoria(bolao.id)
    .subscribe(vitoria =>{
      if(vitoria){
        this.bolao$ = this.bolaoService.findById(bolao.id);
      }
    });
  }

  empate(bolao: Bolao){
    this.bolaoService.empate(bolao.id)
    .subscribe(empate =>{
      if(empate){
        this.bolao$ = this.bolaoService.findById(bolao.id);
      }
    });
  }

  derrota(bolao: Bolao){
    this.bolaoService.derrota(bolao.id)
    .subscribe(derrota =>{
      if(derrota){
        this.bolao$ = this.bolaoService.findById(bolao.id);
      }
    });
  }
}
