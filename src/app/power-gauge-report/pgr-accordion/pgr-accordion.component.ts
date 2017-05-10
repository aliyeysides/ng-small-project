import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {AccordionModule} from 'ngx-bootstrap';
import {Stock} from "../../shared/watchlist/stock";

@Component({
  selector: 'psp-pgr-accordion',
  templateUrl: './pgr-accordion.component.html',
  styleUrls: ['./pgr-accordion.component.scss']
})
export class PgrAccordionComponent implements OnInit, OnChanges {

  @Input() stock: Stock;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['stock']) {
      this.stock = changes['stock'].currentValue;
    }
  }

}
