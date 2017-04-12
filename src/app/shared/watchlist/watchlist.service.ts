import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Stock } from './stock';
import { WATCHLIST } from './mock-watchlist';

@Injectable()
export class WatchlistService {

  stocks: Stock[] = this.getStocks();
  sortedStocks: Stock[] = this.mergeSortStocks(this.stocks);

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

  mergeSortStocks(arr: Stock[]): Stock[] {
    // Break point
    if (arr.length < 2) { return arr };

    let mid = Math.floor(arr.length / 2),
        left = this.mergeSortStocks(arr.slice(0, mid)),
        right = this.mergeSortStocks(arr.slice(mid));

    return this.merge(left, right);

  }

  /**
   * Returns a sorted array based on daily percentage change by merging two stock arrays with a length 1
   * @param {Stock[]} a
   * @param {Stock[]} b
   */
  merge(a: Stock[], b: Stock[]): Stock[] {
    let result = [];

    while (a.length > 0 && b.length > 0) {
      result.push(a[0]['metaInfo'][0]['Percentage '] < b[0]['metaInfo'][0]['Percentage '] ? a.shift() : b.shift());
    }
    return result.concat(a.length ? a : b);
  }

}
