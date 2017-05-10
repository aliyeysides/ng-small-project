import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '../app-routing.module';
import {SymbolSearchModule} from '../shared/symbol-search/symbol-search.module';
import {FixedHeaderModule} from './fixed-header/fixed-header.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {PrimaryHeaderModule} from './primary-header/primary-header.module';
import {SecondaryHeaderModule} from './secondary-header/secondary-header.module';

import {LoginComponent} from './session/login.component';

import {SharedService} from './shared.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SymbolSearchModule,
    FixedHeaderModule,
    SidebarModule,
    PrimaryHeaderModule,
    SecondaryHeaderModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SymbolSearchModule,
    FixedHeaderModule,
    SidebarModule,
    PrimaryHeaderModule,
    SecondaryHeaderModule
  ],
  declarations: [LoginComponent],
  providers: [SharedService]
})
export class SharedModule {
}
