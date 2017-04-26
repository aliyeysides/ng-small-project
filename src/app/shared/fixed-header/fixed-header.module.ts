import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '../../app-routing.module';

import {FixedHeaderComponent} from './fixed-header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SettingsComponent} from './settings/settings.component';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {GlossaryComponent} from './settings/glossary/glossary.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
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
