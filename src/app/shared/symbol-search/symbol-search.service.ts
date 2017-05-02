import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Stock} from '../../shared/watchlist/stock';

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {SharedService} from '../shared.service';

@Injectable()
export class SymbolSearchService {

  private params: URLSearchParams;

  constructor(private http: Http) {
    this.params = new URLSearchParams;
  }

  public getSymbolData(): Promise<Stock> {
    let symbolDataUrl = 'https://dev.chaikinanalytics.com/CPTRestSecure/app/portfolio/getSymbolData?uid=1050117&symbol=SHLD&components=pgr%2CmetaInfo%2CfundamentalData';

    // uid:1050117
    // symbol:SHLD
    // components:pgr,metaInfo,fundamentalData,EPSData
    // _:1493650250099

    return this.http.get(symbolDataUrl, {
      withCredentials: true
    }).toPromise()
      .then(res => {
        let data = res.json();
        let newStock = new Stock(data.metaInfo, data.pgr, data.fundamentalData, data.status);
        console.log('newStock', newStock);
        console.log('getFundamentalData', newStock.getFundamentalData());
        return newStock;
      })
      .catch(SharedService.handleError)
  }

}
