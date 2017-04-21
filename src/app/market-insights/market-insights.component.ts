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
    this.getInsights('shashankpunuru@flexisphere.com');
  }

  ngOnInit(): void {
  }

  getInsights(email: string): void {
    this.insightService.getInsights(email)
      .then(insights => this.insights = insights);
  }

}
