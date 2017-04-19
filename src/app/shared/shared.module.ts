import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { SymbolSearchComponent } from './symbol-search/symbol-search.component';
import { LoginComponent } from './session/login.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    AppRoutingModule,
    SymbolSearchComponent
  ],
  declarations: [SymbolSearchComponent, LoginComponent]
})
export class SharedModule { }
