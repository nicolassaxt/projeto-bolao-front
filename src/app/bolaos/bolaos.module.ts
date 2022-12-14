import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BolaoComponent } from './bolao/bolao.component';
import { BolaoListComponent } from './bolao-list/bolao-list.component';
import { BolaosComponent } from './bolao-list/bolaos/bolaos.component';
import { FilterByDescription } from './bolao-list/filter-by-description.pipe';
import { LoadButtonComponent } from './bolao-list/load-button/load-button.component';
import { BolaoModule } from './bolao/bolao.module';
import { BolaoListModule } from './bolao-list/bolao-list.module';
import { RouterModule } from '@angular/router';
import { BolaoBemVindoComponent } from './bolao-bem-vindo/bolao-bem-vindo.component';
import { BolaoPartidasModule } from './bolao-partidas/bolao-partidas.module';
import { BolaoListUsersModule } from './bolao-list-users/bolao-list-users.module';




@NgModule({
  declarations: [BolaoBemVindoComponent],
  imports: [
    CommonModule,
    BolaoModule,
    BolaoListModule,
    BolaoListUsersModule,
    BolaoPartidasModule,
    RouterModule,
  ]
})
export class BolaosModule{}
