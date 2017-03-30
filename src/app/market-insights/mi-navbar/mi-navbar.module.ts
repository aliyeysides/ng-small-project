import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiNavbarComponent } from './mi-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MiNavbarComponent
  ],
  declarations: [MiNavbarComponent]
})
export class MiNavbarModule { }
