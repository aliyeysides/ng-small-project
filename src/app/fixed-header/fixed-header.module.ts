import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FixedHeaderComponent } from './fixed-header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FixedHeaderComponent
  ],
  declarations: [
    FixedHeaderComponent,
    NavbarComponent
  ]
})
export class FixedHeaderModule { }
