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
  public actionHeaderClass: object;
  public year: number;
  public date: string;
  public day: string;
  public time: string;
  public greeting: string;

  currentMoment$ = this.currentMoment.asObservable();

  constructor() {
  }

  ngOnInit() {
    this.greeting = this.getGreetingTime(moment());
    this.updateActionHeaderClassObject();

    setInterval(() => {
      this.currentMoment.next(moment());
      this.updateActionHeaderClassObject();
    }, 1000);

    this.currentMoment$.subscribe(
      val => {
        this.year = val.year();
        this.date = val.format('MMM D');
        this.day = val.format('ddd');
        this.time = val.format("hh:mm a");
        this.greeting = this.getGreetingTime(val);
      }
    );
  }

  public updateActionHeaderClassObject() {
    this.actionHeaderClass = {
      'action-header__button--morning': this.greeting == 'morning',
      'action-header__button--afternoon': this.greeting == 'afternoon',
      'action-header__button--evening': this.greeting == 'evening'
    }
  }

  public getGreetingTime(moment: any): string {
    let greeting = null,
      m = moment;

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
