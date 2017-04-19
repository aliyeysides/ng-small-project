import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/toPromise';

// import {Insight} from './insight';
// import {INSIGHTS} from './mock-insights';

@Injectable()
export class InsightService {

  private insightsUrl: string = 'https://qa.chaikinanalytics.com/insights/?json=secursive.get_product_updates&dev=1&count=20&id=2,10&_=1489485632440';
  private params: URLSearchParams = new URLSearchParams;
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getInsights() {
    return this.http.get(this.insightsUrl, {
      search: this.params,
      withCredentials: true
    }).toPromise()
      .then((res) => InsightService.extractData)
      .catch((err) => InsightService.handleError)
  }

  // getInsight(id: number): Promise<Insight> {
  //   return this.getInsights()
  //     .then(insights => insights.find(insight => insight.id === id));
  // }

  private static extractData(res: Response) {
    let body = res.json();
    return body || {}
  }

  private static handleError(err: any) {
    let errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
