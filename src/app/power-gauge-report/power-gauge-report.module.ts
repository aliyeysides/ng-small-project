import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {PowerGaugeReportComponent} from './power-gauge-report.component';
import {PgrAccordionComponent} from './pgr-accordion/pgr-accordion.component';

import {
  AccordionModule,
  PopoverModule
} from 'ngx-bootstrap';
import { PgrHeaderComponent } from './pgr-header/pgr-header.component';

@NgModule({
  imports: [
    SharedModule,
    AccordionModule,
    PopoverModule
  ],
  exports: [
    PowerGaugeReportComponent
  ],
  declarations: [PowerGaugeReportComponent, PgrAccordionComponent, PgrHeaderComponent]
})
export class PowerGaugeReportModule {
}
