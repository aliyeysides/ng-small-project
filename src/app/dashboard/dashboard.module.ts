import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { MiPreviewComponent } from './mi-preview/mi-preview.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent, MiPreviewComponent]
})
export class DashboardModule { }
