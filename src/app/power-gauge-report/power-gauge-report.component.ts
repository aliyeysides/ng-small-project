import {Http, Headers, URLSearchParams} from "@angular/http";

import {SymbolSearchService} from '../shared/symbol-search/symbol-search.service';

import {
Component,
OnInit,
trigger,
state,
style,
transition,
animate,
} from '@angular/core';

import {Stock} from "app/shared/models/stock";
import {PGRFAKEDATA} from './pgrFakeData';
import {Observable} from "rxjs/Observable";
import {SharedService} from "../shared/shared.service";
import {ActivatedRoute} from "@angular/router";

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
export class PowerGaugeReportComponent implements OnInit {

  public helpMenuOpen: string;
  public stock: Stock;
  public researchReport: any;
  public contextSummary: any;
  public tickerCompetitors: any;
  public reportParams: URLSearchParams;
  public overallRatingClass: object;
  public technicalRatingClass: object;
  public earningsRatingClass: object;
  public expertsRatingClass: object;
  public financialRatingClass: object;

  constructor(private symbolSearchService: SymbolSearchService,
              private sharedService: SharedService,
              private http: Http,
              private route: ActivatedRoute) {
    this.reportParams = new URLSearchParams();
  }

  ngOnInit() {
    // this.stock = PGRFAKEDATA[0];
    // this.researchReport = PGRFAKEDATA[1];
    // this.contextSummary = PGRFAKEDATA[2];

    this.route.params
      .subscribe(params => {
        console.log('activated route', params);
        this.symbolSearchService.getSymbolData(params.symbol)
          .switchMap(stock => {
            this.stock = stock;
            return Observable.combineLatest(
              this.symbolSearchService.getResearchReportData(params.symbol),
              this.symbolSearchService.getPGRDataAndContextSummary(params.symbol),
              this.symbolSearchService.getTickerCompetitors(params.symbol)
            )})
          .subscribe(
            res => {
              console.log('res', res);
              this.extractData(res);
            },
            err => this.sharedService.handleError
          );
      });
    this.helpMenuOpen = 'out';
  }

  toggleHelpMenu(): void {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  }

  private extractData(res) {
    console.log('I was called');
    this.researchReport = res[0];
    this.contextSummary = res[1];
    this.tickerCompetitors = res[2].compititors;
    this.overallRatingClass = this.createClassObject(this.contextSummary.pgrContextSummary);
    this.technicalRatingClass = this.createClassObject(this.contextSummary.priceVolumeContextSummary);
    this.earningsRatingClass = this.createClassObject(this.contextSummary.earningsContextSummary);
    this.expertsRatingClass = this.createClassObject(this.contextSummary.expertOpnionsContextSummary);
    this.financialRatingClass = this.createClassObject(this.contextSummary.financialContextSummary);
  }

  public createClassObject(arr: any): object {
    if (arr) {
      return {
        'verybullish' : arr[0].status == 'Very Bullish',
        'bullish' : arr[0].status == 'Bullish',
        'neutral' : arr[0].status == 'Neutral',
        'bearish' : arr[0].status == 'Bearish',
        'verybearish' : arr[0].status == 'Very Bearish'
      }
    }
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
