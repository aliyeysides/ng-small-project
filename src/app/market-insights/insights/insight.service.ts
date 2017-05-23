import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Insight} from './insight';
import {SharedService} from '../../shared/shared.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class InsightService {

  private params: URLSearchParams;

  constructor(private http: Http, private sharedService: SharedService) {
    this.params = new URLSearchParams;
  }

  /* TODO: implement http call to fetch insights */
  public getInsights(): Observable<Insight[]> {
    let insightsUrl = '/insights/?json=secursive.get_product_updates&dev=1&count=20&id=35,4';
    // this.params.set('json', 'secursive.get_product_updates');
    // this.params.set('dev', '1');
    // this.params.set('id', '2,10');

    return this.http.get(insightsUrl, {
      withCredentials: true
    }).map(res => res.json() as Insight[])
      .catch(this.sharedService.handleError)
  }

}
