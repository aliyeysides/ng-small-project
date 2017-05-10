import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

import {Stock} from '../../shared/watchlist/stock';

import {Observable} from 'rxjs/Rx';

import {SharedService} from '../shared.service';

@Injectable()
export class SymbolSearchService {

  private symbolParams: URLSearchParams;

  constructor(private http: Http, private sharedService: SharedService) {
    this.symbolParams = new URLSearchParams;
  }

  public getSymbolData(ticker: string): Observable<Stock> {
    let symbolDataUrl = '/CPTRestSecure/app/portfolio/getSymbolData?uid=1050117';
    let symbol = ticker.toUpperCase();

    this.symbolParams.set('symbol', symbol);
    this.symbolParams.set('components', 'pgr,metaInfo,fundamentalData,EPSData');

    // uid:1050117
    // symbol:SHLD
    // components:pgr,metaInfo,fundamentalData,EPSData
    // _:1493650250099

    return this.http.get(symbolDataUrl, {
      search: this.symbolParams,
      withCredentials: true
    }).map(res => {
      let data = res.json();
      return new Stock(data.metaInfo, data.pgr, data.fundamentalData, data.status);
    })
      .catch(this.sharedService.handleError)
  }

}
