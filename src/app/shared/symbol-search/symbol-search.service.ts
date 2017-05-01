import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Stock} from '../../shared/watchlist/stock';

import {Observable} from "rxjs/Observable";

import {SharedService} from '../shared.service';

@Injectable()
export class SymbolSearchService {

  private params: URLSearchParams;

  constructor(private http: Http) {
    this.params = new URLSearchParams;
  }

  getSymbolData(): any {
    let symbolDataUrl = 'http://dev.chaikinanalytics.com/CPTRestSecure/app/portfolio/getSymbolData?uid=1050117&symbol=BNS&components=pgr%2CmetaInfo%2CfundamentalData';

    // uid:1050173
    // symbol:CAR
    // components:pgr,metaInfo,fundamentalData,EPSData
    // _:1493650250099

    // this.params.set('symbol', 'CAR');
    // this.params.set('components', )

    return this.http.get(symbolDataUrl, {
      withCredentials: true
    }).subscribe(
      (res) => console.log('res', res),
      (err) => console.log('err', err),
      () => console.log('completed')
    )
  }

}
