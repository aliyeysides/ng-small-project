import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {MarketInsightsComponent} from './market-insights.component';
import {InsightDetailComponent} from './insight-detail/insight-detail.component';

import {
  BsDropdownModule,
  PopoverModule,
  CollapseModule
} from 'ngx-bootstrap';

import {InsightService} from "./insights/insight.service";
import {AboutComponent} from './about/about.component';

@NgModule({
  imports: [
    SharedModule,
    BsDropdownModule,
    PopoverModule,
    CollapseModule
  ],
  exports: [
    MarketInsightsComponent
  ],
  declarations: [MarketInsightsComponent, InsightDetailComponent, AboutComponent],
  providers: [InsightService]
})
export class MarketInsightsModule {
}
