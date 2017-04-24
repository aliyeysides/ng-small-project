import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Session} from "./session";
import {User} from "./user";

@Injectable()
export class SessionService {
  private authUrl: string = 'https://app.chaikinanalytics.com/CPTRestSecure/app/authenticate/getAuthorization';
  private loginUrl: string = 'https://app.chaikinanalytics.com/CPTRestSecure/app/user/login';
  private authParams: URLSearchParams = new URLSearchParams;
  private loginParams: URLSearchParams = new URLSearchParams;

  constructor(private http: Http) {
  }

  getAuthorization(email: string, password: string): Promise<Session> {
    this.authParams.set('email', email);
    this.authParams.set('password', password);

    return this.http.get(this.authUrl, {
      search: this.authParams,
      withCredentials: true
    }).toPromise()
      .then(res => res.json() as Session)
      .catch(SessionService.handleError)
  }

  login(): Promise<User> {

    this.loginParams.set('deviceId', this.authParams.get('email'));

    /* TODO: Detect environment dynamically */
    // var headers = new Headers();
    // headers.append('environment', environment);
    // headers.append('version', '1.3.4');

    return this.http.get(this.loginUrl, {
      search: this.loginParams,
      withCredentials: true
    }).toPromise()
      .then(res => res.json() as User)
      .catch(SessionService.handleError)
  }

  private static handleError(err: Response) {
    /* TODO: Handle Error */
    console.log('err', err);
    // let errMsg = (err.message) ? err.message :
    //   err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    // return Observable.throw(errMsg);
  }
}
