import {SymbolSearchService} from '../shared/symbol-search/symbol-search.service';

import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import {Stock} from "app/shared/watchlist/stock";
import {Observable} from "rxjs/Observable";
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'psp-power-gauge-report',
  templateUrl: './power-gauge-report.component.html',
  styleUrls: ['./power-gauge-report.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'hidden',
        height: 'auto',
        width: '300px'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '0px'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class PowerGaugeReportComponent implements OnInit {

  public helpMenuOpen: string;
  public stock: Stock;

  constructor(private symbolSearchService: SymbolSearchService, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.symbolSearchService.getSymbolData('aapl')
      .subscribe(
        res => this.stock = res,
        err => this.sharedService.handleError
      );
    this.helpMenuOpen = 'out';
  }

  toggleHelpMenu(): void {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  }

}
