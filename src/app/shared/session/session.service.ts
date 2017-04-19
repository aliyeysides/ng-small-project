import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class SessionService {
  private authUrl: string = 'https://qa.chaikinanalytics.com/CPTRestSecure/app/authenticate/getAuthorization';
  private params: URLSearchParams = new URLSearchParams;

  constructor(private http: Http) {
  }

  getAuthorization(email: string, password: string) {
    this.params.set('email', email);
    this.params.set('password', password);
    return this.http.get(this.authUrl, {
      search: this.params
    }).subscribe(
      (res) => this.extractData,
      (err) => this.handleError
    )
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(err: any) {
    let errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
