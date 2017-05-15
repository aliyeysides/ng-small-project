/* @angular */
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Bootstrap component */
import {AppComponent} from './app.component';

/* Modules */
import {SharedModule} from './shared/shared.module';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
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
    CollapseModule.forRoot()
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
