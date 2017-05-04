import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';

import {MarcChaikinComponent} from './marc-chaikin/marc-chaikin.component';
import { JohnSchlitzComponent } from './john-schlitz/john-schlitz.component';
import { AboutChaikinAnalyticsComponent } from './chaikin-analytics/about-chaikin-analytics.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MarcChaikinComponent, JohnSchlitzComponent, AboutChaikinAnalyticsComponent]
})
export class AboutModule {
}
