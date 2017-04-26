import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '../app-routing.module';
import {FixedHeaderModule} from './fixed-header/fixed-header.module';
import {SidebarModule} from './sidebar/sidebar.module';

import {LoginComponent} from './session/login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FixedHeaderModule,
    SidebarModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FixedHeaderModule,
    SidebarModule
  ],
  declarations: [LoginComponent]
})
export class SharedModule {
}
