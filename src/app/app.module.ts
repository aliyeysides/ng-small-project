/* @angular */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Bootstrap component */
import {AppComponent} from './app.component';

/* Modules */
import {SharedModule} from './shared/shared.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {MarketInsightsModule} from './market-insights/market-insights.module';
import {PowerGaugeReportModule} from './power-gauge-report/power-gauge-report.module';
import {PortfolioHealthCheckModule} from './portfolio-health-check/portfolio-health-check.module';

/* Services */
import {SessionService} from "./shared/session/session.service";

/* ngx-bootstrap lib (Bootstrap4 wrapper) */
import {
  AlertModule,
  ButtonsModule,
  TabsModule,
  TooltipModule,
  BsDropdownModule,
  PopoverModule,
  AccordionModule,
  CollapseModule
} from 'ngx-bootstrap';

/* Loading mask */
import {BusyModule} from 'angular2-busy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
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
    CollapseModule.forRoot(),
    BusyModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
