import {Component, OnInit} from '@angular/core';

import {Stock} from '../../shared/watchlist/stock';
import {WatchlistService} from '../../shared/watchlist/watchlist.service';

const PGRVALUES = {
  1: 'VERY_BEARISH',
  2: 'BEARISH',
  3: 'NEGATIVE_NEUTRAL',
  4: 'NEUTRAL',
  5: 'POSITIVE_NEUTRAL',
  6: 'BULLISH',
  7: 'VERY_BULLISH'
};

@Component({
  selector: 'psp-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  public watchlist: Stock[];
  public sortWatchList: string;

  constructor(private watchlistService: WatchlistService) {
  }

  ngOnInit() {
    this.watchlist = this.watchlistService.getStocks();
    this.sortWatchList = 'up';
  }

  public displayRating(rawPGR: number, correctedPGR: number) {
    if (rawPGR >= 4 && correctedPGR === 3) {
      return PGRVALUES[5];
    } else if (rawPGR <= 2 && correctedPGR === 3) {
      return PGRVALUES[3];
    } else if (rawPGR === 3 && correctedPGR === 3) {
      return PGRVALUES[4];
    } else if (rawPGR === -1 || correctedPGR === -1) {
      return 'NONE'
    } else if (correctedPGR === 1 || correctedPGR === 2) {
      return PGRVALUES[+correctedPGR];
    } else {
      return PGRVALUES[+correctedPGR + 2];
    }
  }

  public sortByDailyChange(): void {
    if (this.sortWatchList === 'up') {
      this.sortWatchList = 'down';
      this.watchlist.reverse();
      return;
    }
    this.sortWatchList = 'up';
    this.watchlist.reverse();
  }

}
