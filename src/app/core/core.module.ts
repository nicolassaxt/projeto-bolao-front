import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ HeaderComponent ],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class CoreModule{}
