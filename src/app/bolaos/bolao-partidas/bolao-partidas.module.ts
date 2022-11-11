import { NgModule } from '@angular/core';
import { BolaoPartidasComponent } from './bolao-partidas.component';
import { CommonModule } from '@angular/common';
import { BolaoModule } from '../bolao/bolao.module';

@NgModule({
  declarations: [BolaoPartidasComponent],
  exports: [BolaoPartidasComponent],
  imports: [
    CommonModule,
    BolaoModule
  ]
})
export class BolaoPartidasModule{}
