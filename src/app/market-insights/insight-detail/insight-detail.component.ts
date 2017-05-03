import {Component, OnInit} from '@angular/core';

import {Insight} from '../insights/insight';
import {InsightService} from '../insights/insight.service';
import {INSIGHTS} from '../insights/mock-insights';

import {SharedService} from '../../shared/shared.service';

import 'rxjs/add/operator/map';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'psp-insight-detail',
  templateUrl: './insight-detail.component.html',
  styleUrls: ['./insight-detail.component.scss']
})
export class InsightDetailComponent implements OnInit {

  public insight: Insight;

  constructor(private sharedService: SharedService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    window.scrollTo(0,0); // scrolls to top of insight
    this.sharedService.setReturnIconVisible(true);
    this.route.params
      .subscribe(params => {
        let id = +params['id'] - 1;
        this.insight = INSIGHTS[id];
      });
  }

  printInsight(): void {
    let printContents, popupWin, insightTitle;

    insightTitle = document.getElementById('insight-title').innerHTML;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>${insightTitle}</title>
          <style>
          //........Customized style.......
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
