import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

import {Stock} from '../watchlist/stock';

import {Observable} from 'rxjs/Rx';

import {SharedService} from '../shared.service';

@Injectable()
export class SymbolSearchService {

  private symbolParams: URLSearchParams;
  private symbolLookupParams: URLSearchParams;
  private researchParams: URLSearchParams;
  private summaryParams: URLSearchParams;

  constructor(private http: Http, private sharedService: SharedService) {
    this.symbolParams = new URLSearchParams;
    this.symbolLookupParams = new URLSearchParams;
    this.researchParams = new URLSearchParams;
    this.summaryParams = new URLSearchParams;
  }

  public getSymbolData(ticker: string): Observable<Stock> {
    let symbolDataUrl = '/CPTRestSecure/app/portfolio/getSymbolData?';
    let symbol = ticker.toUpperCase();

    this.symbolParams.set('symbol', symbol);
    this.symbolParams.set('components', 'pgr,metaInfo,fundamentalData,EPSData');

    return this.http.get(symbolDataUrl, {
      search: this.symbolParams,
      withCredentials: true
    }).map(res => {
      let data = res.json();
      return new Stock(data.EPSData, data.metaInfo, data.pgr, data.fundamentalData, data.status);
    })
      .catch(this.sharedService.handleError)
  }

  public getResearchReportData(stock: Stock): Observable<object> {
    let researchReportUrl = '/CPTRestSecure/app/researchReportServices/getResearchReportData?';
    let symbol = stock.getStockSymbol();

    this.researchParams.set('symbol', symbol);

    return this.http.get(researchReportUrl, {
      search: this.researchParams,
      withCredentials: true
    }).map(res => {
      return res.json();
    })
      .catch(this.sharedService.handleError)
  }

  public getPGRDataAndContextSummary(stock: Stock): Observable<object> {
    let contextSummaryUrl = '/CPTRestSecure/app/researchReportServices/getPgrDataAndContextSummary?';
    let symbol = stock.getStockSymbol();
    // let industry = stock

    this.summaryParams.set('symbol', symbol);
    // this.summaryParams.set('industry', this.)

    return this.http.get(contextSummaryUrl, {
      search: this.summaryParams,
      withCredentials: true
    }).map(res => {
      return res.json();
    })
      .catch(this.sharedService.handleError)
  }

  public symbolLookup(query: string): Observable<Array<object>> {
    let symbolLookupUrl = '/CPTRestSecure/app/stocks/symbol-lookupV1?';

    this.symbolLookupParams.set('q', query);
    this.symbolLookupParams.set('searchColumn', "symbol");

    return this.http.get(symbolLookupUrl, {
      search: this.symbolLookupParams,
      withCredentials: true
    }).map(res => {
      return res.json();
    })
      .catch(this.sharedService.handleError)
  }

}
