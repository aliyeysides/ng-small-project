import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/toPromise';

import {Insight} from './insight';
import {INSIGHTS} from './mock-insights';


@Injectable()
export class InsightService {

  public static insights: Insight[];

  private params: URLSearchParams;

  constructor(private http: Http) {
    this.params = new URLSearchParams;
    this.fetchInsights();
  }

  public getInsights() {
    return InsightService.insights;
  }

  private fetchInsights() {
    // let insightsUrl = 'https://app.chaikinanalytics.com/insights/?json=secursive.get_product_updates&dev=1&id=2,10';
    InsightService.insights = INSIGHTS;

    //   this.http.get(insightsUrl, {
    //   search: this.params,
    //   withCredentials: true
    // }).toPromise()
    //   .then(res => res.json() as Insight[])
    //   .catch(err => InsightService.handleError)
  }

  // getInsight(id: number): Promise<Insight> {
  //   return this.getInsights()
  //     .then(insights => insights.find(insight => insight.id === id));
  // }

  private static handleError(err: any) {
    let errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
