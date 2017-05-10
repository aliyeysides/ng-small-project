import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SymbolSearchModule} from '../symbol-search/symbol-search.module';

import {PrimaryHeaderComponent} from './primary-header.component';

@NgModule({
  imports: [
    CommonModule,
    SymbolSearchModule
  ],
  exports: [PrimaryHeaderComponent],
  declarations: [PrimaryHeaderComponent]
})
export class PrimaryHeaderModule {
}
