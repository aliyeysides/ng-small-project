import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MarketInsightsComponent } from './market-insights/market-insights.component';
import { PowerGaugeReportComponent } from './power-gauge-report/power-gauge-report.component';
import { PortfolioHealthCheckComponent } from './portfolio-health-check/portfolio-health-check.component';
import { InsightDetailComponent } from './market-insights/insight-detail/insight-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/market-insights', pathMatch: 'full' },
  { path: 'market-insights', component: MarketInsightsComponent },
  { path: 'power-gauge-report', component: PowerGaugeReportComponent },
  { path: 'portfolio-health-check', component: PortfolioHealthCheckComponent },
  { path: 'market-insights/:id', component: InsightDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
