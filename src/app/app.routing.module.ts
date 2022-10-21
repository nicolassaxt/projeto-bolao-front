import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolaoListComponent } from './bolaos/bolao-list/bolao-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { BolaoListResolver } from './bolaos/bolao-list/bolao-list.resolver';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignupComponent } from './home/singup/singup.component';
import { HomeComponent } from './home/home.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SignInComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  },
  {
    path: 'user/:userName',
    component: BolaoListComponent,
    resolve: {
      bolaos: BolaoListResolver
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
