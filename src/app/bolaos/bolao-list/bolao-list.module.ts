import { NgModule } from '@angular/core';
import { BolaoListComponent } from './bolao-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { BolaoModule } from '../bolao/bolao.module';
import { BolaosComponent } from './bolaos/bolaos.component';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover.module';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BolaoListComponent,
    BolaosComponent,
    LoadButtonComponent,
    FilterByDescription

  ],
  imports: [
    CommonModule,
    BolaoModule,
    DarkenOnHoverModule,
    RouterModule
  ]
})
export class BolaoListModule{}
