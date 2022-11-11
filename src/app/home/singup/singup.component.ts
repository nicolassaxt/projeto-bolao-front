import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatFormDetectorService } from '../../core/plataform-detector/platform-detector.service';
import { Users } from '../../bolaos/bolao-list-users/users';

@Component({
  templateUrl: './singup.component.html',

})

export class SignupComponent implements OnInit{

  signupForm!: FormGroup;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
    private platFormDetectorService: PlatFormDetectorService
    ){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      user_email: ['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    user_full_name: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]
    ],
    username: ['',
       [
        Validators.required,
        lowerCaseValidator,     //validação criada
        Validators.minLength(2),
        Validators.maxLength(30)
      ],

    ],
    user_password: ['',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]]
    });

    this.platFormDetectorService.isPlatformBrowser() && this.emailInput.nativeElement.focus();
  }

  register() {
    this.signUpService
      .register(
        this.signupForm.controls['username'].value,
        this.signupForm.controls['user_email'].value,
        this.signupForm.controls['user_full_name'].value,
        this.signupForm.controls['user_password'].value
      )
      .subscribe(() => {
        this.router.navigate([''])
      }),
      (err: Error) => console.log(`Erro ao realizar o Register -> ${err}`);
  }
}
