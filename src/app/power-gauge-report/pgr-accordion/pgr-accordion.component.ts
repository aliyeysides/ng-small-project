import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {AccordionModule} from 'ngx-bootstrap';
import {Stock} from "../../shared/models/stock";

@Component({
  selector: 'psp-pgr-accordion',
  templateUrl: './pgr-accordion.component.html',
  styleUrls: ['./pgr-accordion.component.scss']
})
export class PgrAccordionComponent implements OnInit, OnChanges {

  @Input() stock: Stock;
  public financialKeys: Array<string>;
  public earningsKeys: Array<string>;
  public technicalKeys: Array<string>;
  public expertKeys: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['stock']) {
      this.stock = changes['stock'].currentValue;
      if (this.stock) {
        console.log('stock', this.stock);
        this.financialKeys = this.stock.getFinancialKeys();
        this.earningsKeys = this.stock.getEarningsKeys();
        this.technicalKeys = this.stock.getTechnicalKeys();
        this.expertKeys = this.stock.getExpertKeys();
      }
    }
  }

  public getClass(pgrValue: number): string {
    switch (pgrValue) {
      case 5:
        return 'slider-veryBullish';
      case 4:
        return 'slider-bullish';
      case 3:
        return 'slider-neutral';
      case 2:
        return 'slider-bearish';
      case 1:
        return 'slider-veryBearish';
    }
  }

}
