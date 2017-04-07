import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerGaugeReportComponent } from './power-gauge-report.component';
import { PgrAccordionComponent } from './pgr-accordion/pgr-accordion.component';

import {
  AccordionModule,
  PopoverModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    PopoverModule
  ],
  exports: [
    PowerGaugeReportComponent
  ],
  declarations: [PowerGaugeReportComponent, PgrAccordionComponent]
})
export class PowerGaugeReportModule { }
