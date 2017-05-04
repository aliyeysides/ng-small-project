import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {AboutModule} from './about/about.module';

import {MarketInsightsComponent} from './market-insights.component';
import {InsightDetailComponent} from './insight-detail/insight-detail.component';

import {
  BsDropdownModule,
  PopoverModule
} from 'ngx-bootstrap';

import {InsightService} from "./insights/insight.service";

@NgModule({
  imports: [
    SharedModule,
    AboutModule,
    BsDropdownModule,
    PopoverModule
  ],
  exports: [
    MarketInsightsComponent
  ],
  declarations: [MarketInsightsComponent, InsightDetailComponent],
  providers: [InsightService]
})
export class MarketInsightsModule {
}
