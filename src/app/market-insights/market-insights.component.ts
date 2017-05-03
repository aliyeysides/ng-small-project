import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {InsightService} from './insights/insight.service';

import {Insight} from './insights/insight';
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

  constructor(private insightService: InsightService, private router: Router) {
  }

  ngOnInit(): void {
    this.previewLimit = 6;
    this.addPerLoad = 2;
    this.insights = this.getMarketInsights(this.previewLimit);
  }

  public getMarketInsights(amount: number): Array<object> {
    let results = [],
        insights = this.insightService.getInsights();
    for (let previewCount = 0; previewCount < amount; previewCount++) {
      results.push(INSIGHTS[previewCount]);
    }
    return results;
  }

  public loadMoreInsights(additional: number): void {
    this.previewLimit += additional;
    this.insights = [];
    this.insights = this.getMarketInsights(this.previewLimit);
  }

  gotoInsight(insight: any): void {
    this.router.navigate(['/market-insights', insight.id]);
  }

}
