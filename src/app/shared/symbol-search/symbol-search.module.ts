import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SymbolSearchComponent} from './symbol-search.component';

import {SymbolSearchService} from './symbol-search.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SymbolSearchComponent],
  declarations: [SymbolSearchComponent],
  providers: [SymbolSearchService]
})
export class SymbolSearchModule {
}
