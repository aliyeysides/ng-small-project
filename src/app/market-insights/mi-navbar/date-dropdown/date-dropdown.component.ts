import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'psp-date-dropdown',
  templateUrl: './date-dropdown.component.html',
  styleUrls: ['./date-dropdown.component.scss']
})
export class DateDropdownComponent implements OnInit {
  dates: any[] = [];

  constructor(){ }

  ngOnInit() {
    this.getDates(5);
  }

  getDates(range: Number): void {
    for (let counter = 0; counter < range; counter++){
      let date = moment().format("dddd, MMMM Do YYYY");
      this.dates.push(date);
    }
  }
}
