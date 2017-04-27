import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SharedService {

  private returnIconVisible: Subject<boolean> = new Subject<boolean>();

  returnIconVisible$ = this.returnIconVisible.asObservable();

  /* Setter for return icon on secondary-header component */
  setReturnIconVisible(data: boolean) {
    this.returnIconVisible.next(data);
  }

}
