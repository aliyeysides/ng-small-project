import { Component, OnInit } from '@angular/core';

import { Stock } from '../../shared/watchlist/stock';
import { WatchlistService } from '../../shared/watchlist/watchlist.service';

const PGRVALUES = {
  1: 'VERY BEARISH',
  2: 'BEARISH',
  3: 'NEGATIVE NEUTRAL',
  4: 'NEUTRAL',
  5: 'POSITIVE NEUTRAL',
  6: 'BULLISH',
  7: 'VERY BULLISH'
}

@Component({
  selector: 'psp-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  watchlist: Stock[];
  sortWatchList: string = 'up';

  constructor(
    private watchlistService: WatchlistService
  ) { }

  ngOnInit() {
    this.watchlist = this.watchlistService.sortedStocks.reverse();
    console.log('on landing it is ', this.sortWatchList);
  }

  /**
   * Returns PGR rating based on raw PGR and corrected PGR scores returned from getSymbolData call
   * @param {Number} rawPGR
   * @param {Number} correctedPGR
   */
  displayRating(rawPGR: Number, correctedPGR: Number) {
    if (rawPGR >= 4 && correctedPGR === 3) {
      return PGRVALUES[5];
    } else if (rawPGR <= 2 && correctedPGR === 3) {
      return PGRVALUES[3];
    } else if (rawPGR === 3 && correctedPGR === 3) {
      return PGRVALUES[4];
    } else if (rawPGR === -1 || correctedPGR === -1) {
      return 'NONE'
    } else {
      return PGRVALUES[+rawPGR];
    }
  }

  sortByDailyChange(): void {
    if (this.sortWatchList === 'up') {
      this.sortWatchList = 'down';
      this.watchlist = this.watchlistService.sortedStocks.reverse();
      return;
    }
    this.sortWatchList = 'up';
    this.watchlist = this.watchlistService.sortedStocks.reverse();
  }

}
