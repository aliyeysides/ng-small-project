import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {SharedService} from "../shared.service";
import {Http} from "@angular/http";

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
  public spy: any;
  public alerts: Array<any>;

  currentMoment$ = this.currentMoment.asObservable();

  constructor(private sharedService: SharedService,
              private http: Http) {
  }

  ngOnInit() {
    this.getDailySPY();
    this.greeting = this.getGreetingTime(moment());
    this.updateActionHeaderClassObject();

    setInterval(() => {
      this.currentMoment.next(moment());
      this.updateActionHeaderClassObject();
    }, 1000);

    setInterval(() => {
      this.getDailySPY();
    }, 60 * 1000);

    this.currentMoment$.subscribe(
      val => {
        this.year = val.year();
        this.date = val.format('MMM D');
        this.day = val.format('ddd');
        this.time = val.format("h:mm a");
        this.greeting = this.getGreetingTime(val);
      }
    );

    this.sharedService.getAlerts().subscribe(
      res => this.alerts = res
    )
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

  public getDailySPY() {
    let spyPriceUrl = '/CPTRestSecure/app/price/getSymbolPrice?ticker=SPY';

    this.http.get(spyPriceUrl, {
      withCredentials: true
    }).map(res => res.json())
      .subscribe(
        val => this.spy = val,
        err => this.sharedService.handleError
      )
  }

}
