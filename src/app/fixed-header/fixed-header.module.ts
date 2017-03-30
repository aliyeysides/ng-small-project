import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { FixedHeaderComponent } from './fixed-header.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderSettingsComponent } from './header-settings/header-settings.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FixedHeaderComponent
  ],
  declarations: [
    FixedHeaderComponent,
    LogoComponent,
    NavbarComponent,
    HeaderSettingsComponent
  ]
})
export class FixedHeaderModule { }
