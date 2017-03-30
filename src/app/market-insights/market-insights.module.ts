import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiNavbarModule } from './mi-navbar/mi-navbar.module';
import { MarketInsightsComponent } from './market-insights.component';
import { InsightService } from './shared/insight.service';

@NgModule({
  imports: [
    CommonModule,
    MiNavbarModule
  ],
  exports: [
    MarketInsightsComponent
  ],
  declarations: [MarketInsightsComponent],
  providers: [InsightService]
})
export class MarketInsightsModule { }
