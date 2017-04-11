import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { MiPreviewComponent } from './mi-preview/mi-preview.component';
import { TopMoversComponent } from './top-movers/top-movers.component';
import { PgrSearchBoxComponent } from './pgr-search-box/pgr-search-box.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent, MiPreviewComponent, TopMoversComponent, PgrSearchBoxComponent]
})
export class DashboardModule { }
