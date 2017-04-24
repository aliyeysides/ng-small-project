import { Component, OnInit } from '@angular/core';

import { Insight } from '../../market-insights/insights/insight';
import { InsightService } from '../../market-insights/insights/insight.service';

@Component({
  selector: 'psp-mi-preview',
  templateUrl: './mi-preview.component.html',
  styleUrls: ['./mi-preview.component.scss']
})
export class MiPreviewComponent implements OnInit {

  insights: Insight[] = [];

  constructor(
    private insightService: InsightService
  ) { }

  ngOnInit() {
    // this.getInsights(2);
  }

  /**
   *
   * @param {number} previewLimit Number of insights to display
   */
  // getInsights(previewLimit: Number): void {
  //   this.insightService.getInsights()
  //       .then(insights => {
  //         for (let previewCount = 0; previewCount < previewLimit; previewCount++){
  //           this.insights.push(insights[previewCount]);
  //         }
  //       })
  // }

}
