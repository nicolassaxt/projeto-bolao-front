import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Bolao } from '../bolao/bolao';
import { BolaoService } from '../bolao/bolao.service';

@Component({
  selector: 'pb-bolao-list',
  templateUrl: './bolao-list.component.html',
  styleUrls: ['./bolao-list.component.css']
})
export class BolaoListComponent implements OnInit, OnDestroy {


  bolaos: Bolao[] = [];
  filter: string = '';

  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private bolaoService: BolaoService
    ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.userName = params['userName'];
      this.bolaos = this.activatedRoute.snapshot.data['bolaos'];
    });
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }


  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load(){
    this.bolaoService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(bolaos =>{
      this.filter = '';
      this.bolaos = this.bolaos.concat(bolaos)
      if(!bolaos.length) this.hasMore = false;
    })
  }

}
