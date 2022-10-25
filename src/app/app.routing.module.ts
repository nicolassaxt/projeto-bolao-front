import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolaoListComponent } from './bolaos/bolao-list/bolao-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { BolaoListResolver } from './bolaos/bolao-list/bolao-list.resolver';
import { BolaoBemVindoComponent } from './bolaos/bolao-bem-vindo/bolao-bem-vindo.component';
import { BolaoListUsers } from './bolaos/bolao-list-users/bolao-list-users.component';
import { AuthGuard } from './core/auth/auth.guard';




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user/:userName',
    component: BolaoListComponent,
    canActivate: [AuthGuard],
    resolve: {
      bolaos: BolaoListResolver
    }
  },
  {
    path: 'list',
    component: BolaoListUsers,
    canActivate: [AuthGuard]
  },
  {
    path: 'bemvindo',
    component: BolaoBemVindoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
