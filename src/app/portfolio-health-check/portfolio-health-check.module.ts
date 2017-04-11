import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PortfolioHealthCheckComponent } from './portfolio-health-check.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    PortfolioHealthCheckComponent
  ],
  declarations: [PortfolioHealthCheckComponent, WatchlistComponent]
})
export class PortfolioHealthCheckModule { }
