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

  public getFinancialText(): string {
    return "A portion of the overall Power Gauge Rating is determined based on select financial data that the model analyzes to determine the company’s stability. Some of these include the amount of operating cash (or free cash flow) the company has after the expenses required to maintain the company on a day to day basis, or metrics such as “debt to equity” which asses the company’s financial leverage or ability to satisfy their debt obligations.These and other financial data points are combined, scored, and weighted using a proprietary scoring system to determine the overall financials rank used to feed the Power Gauge Rating."
  }

  public getEarningsText(): string {
    return "Various Earnings data help to indicate how a company might continue to perform, which is important in assessing if/how their overall value (and stock value) is likely to increase or not. Chaikin looks at various Earnings metrics such as growth, earnings surprise (how a company reports earnings relative to the analysts’ expectations), earnings trend over time, and others to score a company’s earnings potential.Using the Chaikin proprietary scoring system, this is given a rating that is then weighted and rolled up to the overall Power Gauge."
  }

  public getTechnicalText(): string {
    return "Technicals focuses on calculations surrounding historical stock price changes past trading activity. We use various trading metrics, including the Chaikin Money Flow, which was developed by the company’s founder Marc Chaikin and is an industry standard indicator, to assess trends a patterns relevant to the stock. We then utilize our proprietary scoring system to determine how strong the Technicals are for any stock. Note that though the overall Power Gauge rating uses both Technical and Fundamental analysis, it is weighted towards Technicals."
  }

  public getExpertsText(): string {
    return "The experts category covers the analysts’ collective assessment of the stock’s ongoing performance. This includes factors such as expert analyst recommendations and earnings forecasts, and insider activity (people within the company buying or selling the stock) that might indicate any upcoming changes in the stock’s performance. This category also considers the industry strength as a whole and these and other factors are fed into the overall Power Gauge Rating using our proprietary scoring system."
  }

}
