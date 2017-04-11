import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';

import { Insight } from './insight';
import { INSIGHTS } from './mock-insights';

@Injectable()
export class InsightService {

  private insightsUrl = 'https://qa.chaikinanalytics.com/insights/?json=secursive.get_product_updates&dev=1&count=20&id=2,10&_=1489485632440';
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http
  ) { }

  getInsights(): Promise<Insight[]> {
    return Promise.resolve(INSIGHTS); // stub
    // return this.http.get(this.insightsUrl)
    //           .toPromise()
    //           .then(res => res.json().data as Insight[])
    //           .catch(this.handleError);
  }

  getInsight(id: number): Promise<Insight> {
    return this.getInsights()
               .then(insights => insights.find(insight => insight.id === id));
  }

}
