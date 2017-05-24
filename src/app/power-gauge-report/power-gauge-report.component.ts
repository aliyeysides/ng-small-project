import {Http, Headers, URLSearchParams} from "@angular/http";

import {SymbolSearchService} from '../shared/symbol-search/symbol-search.service';

import {
Component,
OnInit,
trigger,
state,
style,
transition,
animate, OnChanges, SimpleChanges
} from '@angular/core';

import {Stock} from "app/shared/models/stock";
import {PGRFAKEDATA} from './pgrFakeData';
import {Observable} from "rxjs/Observable";
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'psp-power-gauge-report',
  templateUrl: './power-gauge-report.component.html',
  styleUrls: ['./power-gauge-report.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: 'auto',
        width: '600px'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class PowerGaugeReportComponent implements OnInit, OnChanges {

  public helpMenuOpen: string;
  public stock: Stock;
  public researchReport: any;
  public contextSummary: any;
  public reportParams: URLSearchParams;

  constructor(private symbolSearchService: SymbolSearchService,
              private sharedService: SharedService,
              private http: Http) {
    this.reportParams = new URLSearchParams();
  }

  ngOnInit() {
    this.stock = PGRFAKEDATA[0];
    this.researchReport = PGRFAKEDATA[1];
    this.contextSummary = PGRFAKEDATA[2];
    // this.symbolSearchService.getSymbolData('xl')
    //   .switchMap(stock => {
    //     this.stock = stock;
    //     return Observable.combineLatest(
    //       this.symbolSearchService.getResearchReportData(stock),
    //       this.symbolSearchService.getPGRDataAndContextSummary(stock)
    //     )})
    //   .subscribe(
    //     res => {
    //       console.log('res', res);
    //       this.researchReport = res[0];
    //       this.contextSummary = res[1];
    //     },
    //     err => this.sharedService.handleError
    //   );
    this.helpMenuOpen = 'out';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['researchReport']) {
      this.researchReport = changes['researchReport'].currentValue;
    }
  }

  toggleHelpMenu(): void {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  }

  public downloadReportPDF(ticker: string) {
    let reportPDFUrl = '/CPTRestSecure/app/pdf/fetchReport?';
    let headers = new Headers();
    headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');

    this.reportParams.set('symbol', ticker);
    this.reportParams.set('response', 'file');

    this.http.get(reportPDFUrl, {
      search: this.reportParams,
      headers: headers,
      withCredentials: true
    }).subscribe(
      res => {
        console.log('res', res)
      },
      err => {
        this.sharedService.handleError(err)
      }
    )
  }

  printReport(): void {
    let printContents, popupWin, reportTitle;

    reportTitle = document.getElementById('report-title').innerHTML;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>${reportTitle}</title>
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
