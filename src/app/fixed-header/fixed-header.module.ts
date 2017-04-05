import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { FixedHeaderComponent } from './fixed-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { GlossaryComponent } from './settings/glossary/glossary.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule
  ],
  exports: [
    FixedHeaderComponent
  ],
  declarations: [
    FixedHeaderComponent,
    NavbarComponent,
    SettingsComponent,
    GlossaryComponent
  ]
})
export class FixedHeaderModule {
}
