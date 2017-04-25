import {Component, OnInit} from '@angular/core';

import {InsightService} from './insights/insight.service';

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
    this.insights = this.getMarketInsights(this.previewLimit);
  }

  public getMarketInsights(amount: number): Array<object> {
    let insights = [];
    for (let previewCount = 0; previewCount < amount; previewCount++) {
      insights.push(this.insightService.getInsights()[previewCount]);
    }
    return insights;
  }

  public loadMoreInsights(additional: number): void {
    this.previewLimit += additional;
    this.insights = [];
    this.insights = this.getMarketInsights(this.previewLimit);
  }


}
