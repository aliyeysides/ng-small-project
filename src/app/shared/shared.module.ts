import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { SymbolSearchComponent } from './symbol-search/symbol-search.component';

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
  declarations: [SymbolSearchComponent]
})
export class SharedModule { }
