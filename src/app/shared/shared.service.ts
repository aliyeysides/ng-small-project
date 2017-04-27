import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SharedService {

  private closeIconVisible: Subject<boolean> = new Subject<boolean>();

  closeIconVisible$ = this.closeIconVisible.asObservable();

  transmitData(data: boolean) {
    this.closeIconVisible.next(data);
  }

}
