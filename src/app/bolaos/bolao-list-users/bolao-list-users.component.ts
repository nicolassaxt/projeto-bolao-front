import { Component, OnInit } from '@angular/core';
import { BolaoListUserService } from './bolao-list-users.service';
import { Users } from './users';

@Component({
  templateUrl: './bolao-list-users.component.html',
  styleUrls: ['./bolao-list-users.component.css']
})
export class BolaoListUsersComponent implements OnInit{

  users!: Users[];

  constructor(private service: BolaoListUserService){}

  ngOnInit(): void {
    this.service.list()
    .subscribe
    (dados => this.users = dados);
  }

}
