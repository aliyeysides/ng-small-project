import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Session} from "./session";
import {User} from "./user";

import {SharedService} from '../../shared/shared.service';

@Injectable()
export class SessionService {

  private authParams: URLSearchParams;
  private loginParams: URLSearchParams;

  constructor(private http: Http, private sharedService: SharedService) {
    this.authParams = new URLSearchParams;
    this.loginParams = new URLSearchParams;
  }

  public getAuthorization(email: string, password: string): Promise<Session> {
    let authUrl = 'https://dev.chaikinanalytics.com/CPTRestSecure/app/authenticate/getAuthorization';
    this.authParams.set('acquireSessionForcibly', 'true');
    this.authParams.set('email', email);
    this.authParams.set('password', password);

    return this.http.get(authUrl, {
      search: this.authParams,
      withCredentials: true
    }).toPromise()
      .then(res => res.json() as Session)
      .catch(this.sharedService.handleError)
  }

  public login(): Promise<User> {
    let loginUrl = 'https://dev.chaikinanalytics.com/CPTRestSecure/app/user/login';
    this.loginParams.set('deviceId', this.authParams.get('email'));

    return this.http.get(loginUrl, {
      search: this.loginParams,
      withCredentials: true
    }).toPromise()
      .then(res => res.json() as User)
      .catch(this.sharedService.handleError)
  }

}
