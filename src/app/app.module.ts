import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { FixedHeaderModule } from './fixed-header/fixed-header.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MarketInsightsModule } from './market-insights/market-insights.module';
import { PowerGaugeReportModule } from './power-gauge-report/power-gauge-report.module';
import { PortfolioHealthCheckModule } from './portfolio-health-check/portfolio-health-check.module';

import {
  AlertModule,
  ButtonsModule,
  TabsModule,
  TooltipModule,
  BsDropdownModule,
  PopoverModule
 } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FixedHeaderModule,
    DashboardModule,
    MarketInsightsModule,
    PowerGaugeReportModule,
    PortfolioHealthCheckModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
