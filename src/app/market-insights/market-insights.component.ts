import {Component, OnInit} from '@angular/core';

import {Insight} from './insights/insight';
import {InsightService} from './insights/insight.service';

@Component({
  selector: 'psp-market-insights',
  templateUrl: './market-insights.component.html',
  styleUrls: ['./market-insights.component.scss']
})
export class MarketInsightsComponent implements OnInit {

  // insights: Insight[];
  insights: any;

  constructor(private insightService: InsightService) {
  }

  ngOnInit(): void {
    this.getInsights();
  }

  getInsights(): void {
    this.insightService.getInsights()
      .then(insights => this.insights = insights);
  }

}
