import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { InsightService } from '../shared/insights/insight.service';

import { MiNavbarComponent } from './mi-navbar/mi-navbar.component';
import { MarketInsightsComponent } from './market-insights.component';
import { InsightDetailComponent } from './insight-detail/insight-detail.component';
import { DateDropdownComponent } from './mi-navbar/date-dropdown/date-dropdown.component';

import {
  BsDropdownModule,
  PopoverModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule,
    PopoverModule
  ],
  exports: [
    MarketInsightsComponent
  ],
  declarations: [MiNavbarComponent, MarketInsightsComponent, InsightDetailComponent, DateDropdownComponent],
  providers: [InsightService]
})
export class MarketInsightsModule { }
