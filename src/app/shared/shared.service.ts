import {Injectable, SecurityContext} from '@angular/core';

import {Subject} from "rxjs/Subject";
import {Observable} from 'rxjs/Rx';
import {DomSanitizer} from "@angular/platform-browser";

@Injectable()
export class SharedService {

  public alerts: Array<any> = [];
  private returnIconVisible: Subject<boolean> = new Subject<boolean>();

  returnIconVisible$ = this.returnIconVisible.asObservable();

  setReturnIconVisible(data: boolean) {
    this.returnIconVisible.next(data);
  }

  public handleError(err: any) {
    let errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  public addAlert(type: string, msg: string) {
    let newAlert = {
      type: type,
      msg: msg
    };
    this.alerts.shift();
    this.alerts.push(newAlert);
  }

  public getAlerts(): Observable<Array<any>>  {
    return Observable.of(this.alerts);
  }

}
