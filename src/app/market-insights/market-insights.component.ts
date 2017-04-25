import {Component, OnInit} from '@angular/core';

import {Insight} from './insights/insight';
import {InsightService} from './insights/insight.service';

import {INSIGHTS} from './insights/mock-insights';

@Component({
  selector: 'psp-market-insights',
  templateUrl: './market-insights.component.html',
  styleUrls: ['./market-insights.component.scss']
})
export class MarketInsightsComponent implements OnInit {

  public insights: Array<object>;
  public addPerLoad: number;

  private previewLimit: number;

  constructor(private insightService: InsightService) {
  }

  ngOnInit(): void {
    this.previewLimit = 4;
    this.addPerLoad = 2;
    this.insights = MarketInsightsComponent.getMarketInsights(this.previewLimit);
  }

  public static getMarketInsights(amount: number): Array<object> {
    let insights = [];
    for (let previewCount = 0; previewCount < amount; previewCount++) {
      insights.push(INSIGHTS[previewCount]);
    }
    return insights;
  }

  public loadMoreInsights(additional: number): void {
    this.previewLimit += additional;
    this.insights = [];
    this.insights = MarketInsightsComponent.getMarketInsights(this.previewLimit);
  }


}
