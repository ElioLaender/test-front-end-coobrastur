import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserAccessRoutingModule } from './user-access.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    UserAccessRoutingModule,
    VmessageModule
  ]
})
export class UserAccessModule { }
