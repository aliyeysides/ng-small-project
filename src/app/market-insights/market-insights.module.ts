import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    BsDropdownModule,
    PopoverModule
  ],
  exports: [
    MarketInsightsComponent
  ],
  declarations: [MiNavbarComponent, MarketInsightsComponent, InsightDetailComponent, DateDropdownComponent],
  providers: []
})
export class MarketInsightsModule { }
