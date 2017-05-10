import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrimaryHeaderComponent} from './primary-header.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [PrimaryHeaderComponent],
  declarations: [PrimaryHeaderComponent]
})
export class PrimaryHeaderModule {
}
