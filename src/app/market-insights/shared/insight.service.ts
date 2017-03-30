import { Injectable } from '@angular/core';

import { Insight } from './insight';
import { INSIGHTS } from './mock-insights';

@Injectable()
export class InsightService {

  constructor() { }

  getInsights(): Insight[] {
    return INSIGHTS;
  }

}
