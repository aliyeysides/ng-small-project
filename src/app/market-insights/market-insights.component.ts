import { Component, OnInit } from '@angular/core';

import { Insight } from './shared/insight';
import { InsightService } from './shared/insight.service';

@Component({
  selector: 'psp-market-insights',
  templateUrl: './market-insights.component.html',
  styleUrls: ['./market-insights.component.scss']
})
export class MarketInsightsComponent implements OnInit {

  insights: Insight[];

  constructor(
    private insightService: InsightService
  ) { }


  ngOnInit(): void {
    this.getInsights();
  }

  getInsights(): void {
    this.insightService.getInsights()
    .then(insights => this.insights = insights);
  }

}
