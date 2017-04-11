import { Component, OnInit } from '@angular/core';

import { Insight } from '../../insights/insight';
import { InsightService } from '../../insights/insight.service';

import * as moment from 'moment';

@Component({
  selector: 'psp-date-dropdown',
  templateUrl: './date-dropdown.component.html',
  styleUrls: ['./date-dropdown.component.scss']
})
export class DateDropdownComponent implements OnInit {
  dates: any[] = [];

  constructor(
    private insightService: InsightService
  ){ }

  ngOnInit() {
    this.getInsightDates(10);
  }

  /**
   *
   * @param {number} range Number representing the amount of days of insights to display
   */
  getInsightDates(range: Number): void {
    this.insightService.getInsights()
        .then(res => {
          for (let counter = 0; counter < range; counter++) {
            // format example: Monday, April 20th 2017
            this.dates.push(moment(res[counter].date).format("dddd, MMMM Do YYYY"));
          }
        })
  }

}
