import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '../app-routing.module';
import {SymbolSearchModule} from '../shared/symbol-search/symbol-search.module';
import {FixedHeaderModule} from './fixed-header/fixed-header.module';
import {PrimaryHeaderModule} from './primary-header/primary-header.module';
import {SecondaryHeaderModule} from './secondary-header/secondary-header.module';

import {LoginComponent} from './session/login.component';

import {SharedService} from './shared.service';
import {PageNotFoundComponent} from './404/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SymbolSearchModule,
    FixedHeaderModule,
    PrimaryHeaderModule,
    SecondaryHeaderModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SymbolSearchModule,
    FixedHeaderModule,
    PrimaryHeaderModule,
    SecondaryHeaderModule
  ],
  declarations: [LoginComponent, PageNotFoundComponent],
  providers: [SharedService]
})
export class SharedModule {
}
