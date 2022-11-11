import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { PlatFormDetectorService } from '../../core/plataform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

  loginForm!: FormGroup;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,           //navegação programatica
    private platFormDetectorService: PlatFormDetectorService //usar o elemento DOM atraeves do navegador
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login(){

    const userName = this.loginForm.controls['userName'].value
    const password = this.loginForm.controls['password'].value

    this.authService
    .authenticate(userName, password)
    .subscribe(
      () => this.router.navigate(['user', userName]),
      err => {
        console.log(err);
        this.loginForm.reset();
        alert('User name ou senha invalida');
      }
      );
  }
}
