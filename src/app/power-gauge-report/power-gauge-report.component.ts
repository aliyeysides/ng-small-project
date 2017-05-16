import {SymbolSearchService} from '../shared/symbol-search/symbol-search.service';

import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate, OnChanges, SimpleChanges
} from '@angular/core';

import {Stock} from "app/shared/models/stock";
import {PGRFAKEDATA} from './pgrFakeData';
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
export class PowerGaugeReportComponent implements OnInit, OnChanges {

  public helpMenuOpen: string;
  public stock: Stock;
  public researchReport: any;
  public contextSummary: any;

  constructor(private symbolSearchService: SymbolSearchService, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.stock = PGRFAKEDATA[0];
    this.researchReport = PGRFAKEDATA[1];
    this.contextSummary = PGRFAKEDATA[2];
    // this.symbolSearchService.getSymbolData('xl')
    //   .switchMap(stock => {
    //     this.stock = stock;
    //     return Observable.combineLatest(
    //       this.symbolSearchService.getResearchReportData(stock),
    //       this.symbolSearchService.getPGRDataAndContextSummary(stock)
    //     )})
    //   .subscribe(
    //     res => {
    //       console.log('res', res);
    //       this.researchReport = res[0];
    //       this.contextSummary = res[1];
    //     },
    //     err => this.sharedService.handleError
    //   );
    this.helpMenuOpen = 'out';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['researchReport']) {
      this.researchReport = changes['researchReport'].currentValue;
    }
  }

  toggleHelpMenu(): void {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  }

}
