import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Stock} from './stock';
import {WATCHLIST} from './mock-watchlist';

@Injectable()
export class WatchlistService {

  public static stocks: Stock[];

  constructor(private http: Http) {
    this.fetchStockList();
  }

  public getStocks(): Stock[] {
    return WatchlistService.stocks;
  }

  /* TODO: implement function to get single stock from list */
  public getStock(index: Number): Stock {
    return this.fetchStockList()[+index]; // Stub
  }

  private fetchStockList(): void {
    /* TODO: implement http call */
    WatchlistService.stocks = WatchlistService.mergeSortStocks(WATCHLIST).reverse();
  }

  private static mergeSortStocks(arr: Stock[]): Stock[] {
    if (arr.length < 2) {
      return arr
    }

    let mid = Math.floor(arr.length / 2),
      left = WatchlistService.mergeSortStocks(arr.slice(0, mid)),
      right = WatchlistService.mergeSortStocks(arr.slice(mid));

    return WatchlistService.merge(left, right);
  }

  private static merge(a: Stock[], b: Stock[]): Stock[] {
    let result = [];

    while (a.length > 0 && b.length > 0) {
      result.push(a[0]['metaInfo'][0]['Percentage '] < b[0]['metaInfo'][0]['Percentage '] ? a.shift() : b.shift());
    }
    return result.concat(a.length ? a : b);
  }

  private static handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
