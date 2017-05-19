import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'psp-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {

  public year = moment().year();
  public date = moment().format('MMM D');
  public day = moment().format('ddd');
  public actionHeaderClass: object;

  constructor() {
  }

  ngOnInit() {
    this.actionHeaderClass = {
      'action-header__button--morning': this.getGreetingTime() == 'morning',
      'action-header__button--afternoon': this.getGreetingTime() == 'afternoon',
      'action-header__button--evening': this.getGreetingTime() == 'evening'
    }
  }

  public getGreetingTime() {
    let greeting = null,
      m = moment();

    if (!m || !m.isValid()) {
      return;
    }

    let split_afternoon = 12,
        split_evening = 17,
        currentHour = parseFloat(m.format("HH"));

    console.log('currentHour', currentHour);
    console.log('isEvening?', currentHour >= split_evening);

    if (currentHour >= split_afternoon && currentHour < split_evening) {
      greeting = "afternoon";
    } else if (currentHour >= split_evening) {
      greeting = "evening";
    } else {
      greeting = "morning";
    }

    return greeting;
  }

}
