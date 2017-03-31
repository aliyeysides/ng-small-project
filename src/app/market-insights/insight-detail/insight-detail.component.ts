import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Insight } from '../shared/insight';
import { InsightService } from '../shared/insight.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'psp-insight-detail',
  templateUrl: './insight-detail.component.html',
  styleUrls: ['./insight-detail.component.scss']
})
export class InsightDetailComponent implements OnInit {
  insight: Insight;

  constructor(
    private insightService: InsightService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.insight = this.insightService.getInsight(1); // stub
  }

  goBack(): void {
    this.location.back();
  }

}
