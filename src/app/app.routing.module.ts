import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolaoListComponent } from './bolaos/bolao-list/bolao-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { BolaoListResolver } from './bolaos/bolao-list/bolao-list.resolver';


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
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
