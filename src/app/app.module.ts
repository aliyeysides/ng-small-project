import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Bootstrap component
import { AppComponent } from './app.component';

// Modules
import { SharedModule } from './shared/shared.module';
import { FixedHeaderModule } from './fixed-header/fixed-header.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MarketInsightsModule } from './market-insights/market-insights.module';
import { PowerGaugeReportModule } from './power-gauge-report/power-gauge-report.module';
import { PortfolioHealthCheckModule } from './portfolio-health-check/portfolio-health-check.module';

// Services
import { InsightService } from './market-insights/insights/insight.service';
import { WatchlistService } from './shared/watchlist/watchlist.service';

// ngx-bootstrap lib (Bootstrap4 wrapper)
import {
  AlertModule,
  ButtonsModule,
  TabsModule,
  TooltipModule,
  BsDropdownModule,
  PopoverModule,
  AccordionModule
 } from 'ngx-bootstrap';

// Loading mask
 import { BusyModule } from 'angular2-busy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
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
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    BusyModule
  ],
  providers: [InsightService, WatchlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
