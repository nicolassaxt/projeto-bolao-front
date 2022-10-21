import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Bolao } from '../../bolao/bolao';

@Component({
  selector: 'pb-bolaos',
  templateUrl: './bolaos.component.html',
  styleUrls: ['./bolaos.component.css']
})
export class BolaosComponent implements OnChanges{

 @Input() bolaos: Bolao[] = [];
  rows: any[] = [];

  constructor() { }

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
}
