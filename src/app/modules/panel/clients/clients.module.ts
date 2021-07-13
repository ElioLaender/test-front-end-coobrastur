import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ClientsRoutingModule } from './clients.routing.modules';
import { ListCustomerInformationComponent } from './list-clients/list-customer-information/list-customer-information.component';
import { ClientsHeaderComponent } from './clients-header/clients-header.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';


@NgModule({
  declarations: [ListClientsComponent, ListCustomerInformationComponent, ClientsHeaderComponent, ClientManagementComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSnackBarModule,
    VmessageModule
  ]
})
export class ClientsModule { }
