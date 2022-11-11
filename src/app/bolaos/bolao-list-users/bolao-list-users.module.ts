import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BolaoModule } from '../bolao/bolao.module';
import { BolaoListUsersComponent } from './bolao-list-users.component';

@NgModule({
  declarations: [BolaoListUsersComponent],
  exports: [BolaoListUsersComponent],
  imports:[
    CommonModule,
    BolaoModule
  ]
})
export class BolaoListUsersModule{}
