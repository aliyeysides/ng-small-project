import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Stock } from './stock';
import { WATCHLIST } from './mock-watchlist';

@Injectable()
export class WatchlistService {

  stocks: Stock[];

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http
  ) { }

  getStocks(): Stock[] {
    return WATCHLIST;
  }

  /**
   *
   * @param {Number} index index of stock object in Stock[]
   */
  getStock(index: Number): Stock {
    return this.getStocks[+index]; // Stub
  }

}
