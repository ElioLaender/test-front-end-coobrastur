import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../errors/not-found/not-found.component';
import { PanelComponent } from './panel.component';

const routes: Routes = [{
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'clientes',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule),
      },
      {
        path: '',
        redirectTo: 'clientes',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class PanelRoutingModule {
  }