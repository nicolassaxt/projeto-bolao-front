import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './singup/singup.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignupComponent,
    HomeComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ]
})
export class HomeModule{}
