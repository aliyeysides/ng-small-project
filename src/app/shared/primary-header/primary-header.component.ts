import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'psp-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {

  public currentMoment = new BehaviorSubject<any>(moment());
  public year: number;
  public date: string;
  public day: string;
  public time: string;
  public greetingTime: string = this.getGreetingTime();
  public actionHeaderClassObject: object;

  currentMoment$ = this.currentMoment.asObservable();

  constructor() {
  }

  ngOnInit() {

    setInterval(() => {
      this.currentMoment.next(moment());
      this.greetingTime = this.getGreetingTime();
    }, 1000);

    this.actionHeaderClassObject = {
      'action-header__button--morning': this.greetingTime == 'morning',
      'action-header__button--afternoon': this.greetingTime == 'afternoon',
      'action-header__button--evening': this.greetingTime == 'evening'
    };

    this.currentMoment$.subscribe(
      val => {
        this.year = val.year();
        this.date = val.format('MMM D');
        this.day = val.format('ddd');
        this.time = val.format("HH:mm a");
      }
    );

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
