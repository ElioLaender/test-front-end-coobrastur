import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../../errors/not-found/not-found.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ListClientsComponent } from './list-clients/list-clients.component';

const routes: Routes = [
  { path: 'lista-de-clientes', component: ListClientsComponent },
  { path: 'novo-cliente', component: ClientManagementComponent },
  { path: 'atualizar-cliente/:id', component: ClientManagementComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }