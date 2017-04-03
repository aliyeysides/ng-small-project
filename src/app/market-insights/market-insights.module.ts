import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { MiNavbarModule } from './mi-navbar/mi-navbar.module';
import { MarketInsightsComponent } from './market-insights.component';
import { InsightService } from '../shared/insights/insight.service';
import { InsightDetailComponent } from './insight-detail/insight-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MiNavbarModule,
    SharedModule
  ],
  exports: [
    MarketInsightsComponent
  ],
  declarations: [MarketInsightsComponent, InsightDetailComponent],
  providers: [InsightService]
})
export class MarketInsightsModule { }
