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

  insights: Array<object>;
  previewLimit: number;
  addPerLoad: number;

  constructor(private insightService: InsightService) {
  }

  ngOnInit(): void {
    this.previewLimit = 4;
    this.addPerLoad = 2;
    this.insights = this.getInsights(this.previewLimit);
  }

  getInsights(previewLimit): Array<object> {
    let insights = [];
    for (let previewCount = 0; previewCount < previewLimit; previewCount++){
      insights.push(INSIGHTS[previewCount]);
    }
    return insights;

    // this.insightService.getInsights()
    //   .then(insights => {
    //     for (let previewCount = 0; previewCount < previewLimit; previewCount++){
    //       this.insights.push(insights[previewCount]);
    //     }
    //   })
  }

  loadMoreInsights(additional: number): void {
    this.previewLimit += additional;
    this.insights = [];
    this.insights = this.getInsights(this.previewLimit);
  }

}
