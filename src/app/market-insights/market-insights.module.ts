import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {MarketInsightsComponent} from './market-insights.component';
import {InsightDetailComponent} from './insight-detail/insight-detail.component';


import {AboutComponent} from './about/about.component';
import {InsightsSidebarComponent} from "./insights-sidebar/insights-sidebar.component";

import {InsightService} from "./insights/insight.service";

import {
BsDropdownModule,
PopoverModule,
CollapseModule
} from 'ngx-bootstrap';

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
  declarations: [MarketInsightsComponent, InsightsSidebarComponent, InsightDetailComponent, AboutComponent],
  providers: [InsightService]
})
export class MarketInsightsModule {
}
