import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/toPromise';

// import {Insight} from './insight';
// import {INSIGHTS} from './mock-insights';


@Injectable()
export class InsightService {

  private insightsUrl: string = 'https://app.chaikinanalytics.com/insights/?json=secursive.get_product_updates&dev=1&id=2,10';
  private params: URLSearchParams = new URLSearchParams;

  constructor(private http: Http) {
  }

  getInsights(email: string) {
    this.params.set('deviceId', email);
    // this.params.set('json', );
    // json=secursive.get_product_updates&dev=1&count=20&id=2,10&_=1489485632440

    return this.http.get(this.insightsUrl, {
      search: this.params,
      withCredentials: true
    }).toPromise()
      .then(res => console.log('res', res))
      .catch((err) => InsightService.handleError)
  }

  // getInsight(id: number): Promise<Insight> {
  //   return this.getInsights()
  //     .then(insights => insights.find(insight => insight.id === id));
  // }

  // private static extractData(res: Response) {
  //   let body = res.json();
  //   return body || {}
  // }

  private static handleError(err: any) {
    let errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
