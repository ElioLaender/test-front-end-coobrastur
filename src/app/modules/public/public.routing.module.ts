import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { PublicComponent } from './public.component';

const routes: Routes = [{
  path: '',
  component: PublicComponent,
  children: [
    { path: 'usuario', loadChildren: () => import('./user-access/user-access.module').then(m => m.UserAccessModule) },
    { path: '**', component: NotFoundComponent }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }