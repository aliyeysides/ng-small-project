import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/toPromise';

import {Insight} from './insight';

@Injectable()
export class InsightService {

  public static insights: Insight[];

  private params: URLSearchParams;

  constructor(private http: Http) {
    this.params = new URLSearchParams;
    this.fetchInsights();
  }

  public getInsights(): Insight[] {
    return InsightService.insights;
  }

  /* TODO: implement http call to fetch insights */
  private fetchInsights(): any {
    // let insightsUrl = 'https://dev.chaikinanalytics.com/insights/';
    let insightsUrl = 'https://dev.chaikinanalytics.com/insights/?json=secursive.get_product_updates&dev=1&count=20&id=35,4';
    // this.params.set('json', 'secursive.get_product_updates');
    // this.params.set('dev', '1');
    // this.params.set('id', '2,10');
      this.http.get(insightsUrl, {
      // search: this.params,
      withCredentials: true
    }).toPromise()
      .then(res => console.log(res.json()))
      .catch(err => InsightService.handleError)
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
