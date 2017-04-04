import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BsDropdownModule,
  PopoverModule
} from 'ng2-bootstrap';

import { MiNavbarComponent } from './mi-navbar.component';
import { DateDropdownComponent } from './date-dropdown/date-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule,
    PopoverModule
  ],
  exports: [
    MiNavbarComponent
  ],
  declarations: [MiNavbarComponent, DateDropdownComponent]
})
export class MiNavbarModule { }
