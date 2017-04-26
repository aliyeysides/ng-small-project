import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryHeaderComponent } from './secondary-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SecondaryHeaderComponent],
  declarations: [SecondaryHeaderComponent]
})
export class SecondaryHeaderModule { }
