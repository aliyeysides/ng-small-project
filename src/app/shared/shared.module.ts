import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '../app-routing.module';

import {SymbolSearchComponent} from './symbol-search/symbol-search.component';
import {LoginComponent} from './session/login.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    SymbolSearchComponent
  ],
  declarations: [SymbolSearchComponent, LoginComponent]
})
export class SharedModule {
}
