import { Component, OnInit } from '@angular/core';

import { Stock } from '../../shared/watchlist/stock';
import { WatchlistService } from '../../shared/watchlist/watchlist.service';

@Component({
  selector: 'psp-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  watchlist: Stock[];

  constructor(
    private watchlistService: WatchlistService
  ) { }

  ngOnInit() {
    this.watchlist = this.watchlistService.getStocks();
    console.log(this.watchlist);
  }

}
