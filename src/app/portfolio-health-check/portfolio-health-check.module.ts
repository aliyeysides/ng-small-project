import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioHealthCheckComponent } from './portfolio-health-check.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioHealthCheckComponent
  ],
  declarations: [PortfolioHealthCheckComponent]
})
export class PortfolioHealthCheckModule { }
