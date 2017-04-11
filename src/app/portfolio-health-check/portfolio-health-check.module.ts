import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PortfolioHealthCheckComponent } from './portfolio-health-check.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PowerbarComponent } from './watchlist/powerbar/powerbar.component';

import { PopoverModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    SharedModule,
    PopoverModule
  ],
  exports: [
    PortfolioHealthCheckComponent
  ],
  declarations: [PortfolioHealthCheckComponent, WatchlistComponent, PowerbarComponent]
})
export class PortfolioHealthCheckModule { }
