import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrimaryHeaderComponent} from './primary-header.component';
import {SymbolSearchComponent} from '../symbol-search/symbol-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PrimaryHeaderComponent, SymbolSearchComponent],
  declarations: [PrimaryHeaderComponent, SymbolSearchComponent]
})
export class PrimaryHeaderModule {
}
