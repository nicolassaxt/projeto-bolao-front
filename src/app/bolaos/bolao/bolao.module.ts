import { NgModule } from '@angular/core';
import { BolaoComponent } from './bolao.component';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [ BolaoComponent ],
   imports: [
      CommonModule,
      HttpClientModule
  ],
  exports: [ BolaoComponent ]
})
export class BolaoModule{}
