import {Component, OnInit} from '@angular/core';

import {Insight} from '../insights/insight';
import {InsightService} from '../insights/insight.service';

import {SharedService} from '../../shared/shared.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'psp-insight-detail',
  templateUrl: './insight-detail.component.html',
  styleUrls: ['./insight-detail.component.scss']
})
export class InsightDetailComponent implements OnInit {

  public insight: Insight;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.setReturnIconVisible(true);
    // this.route.params
    //   .switchMap((params: Params) =>
    //     this.insightService.getInsight(+params['id']))
    //   .subscribe(insight => {
    //     this.insight = insight;
    //   });
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
