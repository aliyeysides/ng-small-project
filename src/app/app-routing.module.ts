import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {MarketInsightsComponent} from './market-insights/market-insights.component';
import {PowerGaugeReportComponent} from './power-gauge-report/power-gauge-report.component';
import {PortfolioHealthCheckComponent} from './portfolio-health-check/portfolio-health-check.component';
import {InsightDetailComponent} from './market-insights/insight-detail/insight-detail.component';
import {GlossaryComponent} from './shared/fixed-header/settings/glossary/glossary.component';
import {LoginComponent} from './shared/session/login.component';

/* ABOUT */
import {MarcChaikinComponent} from './market-insights/about/marc-chaikin/marc-chaikin.component';
import {JohnSchlitzComponent} from './market-insights/about/john-schlitz/john-schlitz.component';
import {AboutChaikinAnalyticsComponent} from './market-insights/about/chaikin-analytics/about-chaikin-analytics.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'market-insights', component: MarketInsightsComponent},
  {path: 'market-insights/:id', component: InsightDetailComponent},
  {path: 'power-gauge-report', component: PowerGaugeReportComponent},
  {path: 'portfolio-health-check', component: PortfolioHealthCheckComponent},
  {path: 'glossary', component: GlossaryComponent},
  {path: 'about/marc-chaikin', component: MarcChaikinComponent},
  {path: 'about/john-schlitz', component: JohnSchlitzComponent},
  {path: 'about/chaikin-analytics', component: AboutChaikinAnalyticsComponent}
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
export class AppRoutingModule {
}
