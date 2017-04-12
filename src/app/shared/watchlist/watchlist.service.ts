import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Stock } from './stock';
import { WATCHLIST } from './mock-watchlist';

@Injectable()
export class WatchlistService {

  stocks: Stock[];
  sortedStocks: Stock[];

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http
  ) { }

  getStocks(): Stock[] {
    this.stocks = WATCHLIST;
    return this.stocks;
  }

  /**
   *
   * @param {Number} index index of stock object in Stock[]
   */
  getStock(index: Number): Stock {
    return this.getStocks[+index]; // Stub
  }

  // mergeSortStocks(): {
  //   Array<Stock> let arr = this.stocks;
  //   if (arr.length < 2) { return arr };

  //   // let mid =
  // }

  // merge(a: Array<Stock>, b: Array<Stock>): {

  // }

}
