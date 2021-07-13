import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel.routing.module';
import { SharedPanelModule } from './shared-panel/shared-panel.module';


@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedPanelModule
  ]
})
export class PanelModule { }
