import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiNavbarComponent } from './mi-navbar.component';
import { DateDropdownComponent } from './date-dropdown/date-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MiNavbarComponent
  ],
  declarations: [MiNavbarComponent, DateDropdownComponent]
})
export class MiNavbarModule { }
