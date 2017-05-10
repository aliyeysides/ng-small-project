import {Injectable} from '@angular/core';

import {Subject} from "rxjs/Subject";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SharedService {

  private returnIconVisible: Subject<boolean> = new Subject<boolean>();

  returnIconVisible$ = this.returnIconVisible.asObservable();

  /* Setter for return icon on secondary-header component */
  setReturnIconVisible(data: boolean) {
    this.returnIconVisible.next(data);
  }

  public handleError(err: any) {
    let errMsg = (err.message) ? err.message :
      err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
