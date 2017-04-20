import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

import * as moment from 'moment';

@Injectable()
export class SessionService {
  private authUrl: string = 'https://qa.chaikinanalytics.com/CPTRestSecure/app/authenticate/getAuthorization';
  private loginUrl: string = 'https://qa.chaikinanalytics.com/CPTRestSecure/app/user/login';
  private authParams: URLSearchParams = new URLSearchParams;
  private loginParams: URLSearchParams = new URLSearchParams;

  constructor(private http: Http) {
  }

  getAuthorization(email: string, password: string) {
    this.authParams.set('email', email);
    this.authParams.set('password', password);
    return this.http.get(this.authUrl, {
      search: this.authParams,
      // withCredentials: true
    }).toPromise()
      .then((res) => SessionService.extractData)
      .catch((err) => SessionService.handleError)
  }

  login(environment: string) {

    this.loginParams.set('deviceId', this.authParams.get('email'));
    /* TODO: Detect environment dynamically */
    // this.loginParams.set('environment', environment);
    // this.loginParams.set('date', date);
    // this.loginParams.set('time', time);
    // this.loginParams.set('version', '1.3.4');
    var headers = new Headers();
    headers.append('environment', environment);
    headers.append('version', '1.3.4');

    this.http.get(this.loginUrl, {
      search: this.loginParams,
      // withCredentials: true,
      headers: headers
    }).toPromise()
      .then((res) => SessionService.extractData)
      .catch((err) => SessionService.handleError)
  }

  private static extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private static handleError(err: any) {
    let errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
