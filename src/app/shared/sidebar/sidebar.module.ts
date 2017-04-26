import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidebarComponent} from './sidebar.component';
import {SymbolSearchComponent} from '../symbol-search/symbol-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SidebarComponent, SymbolSearchComponent],
  declarations: [SidebarComponent, SymbolSearchComponent]
})
export class SidebarModule {
}
