import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';

import 'rxjs/add/operator/takeUntil';

import {SharedService} from '../shared.service';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'psp-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit, OnDestroy {

  public closeIconVisible: boolean;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private location: Location, private sharedService: SharedService) {
    this.sharedService.closeIconVisible$
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
      data => {
        this.closeIconVisible = data;
      }
    )
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  goBack(): void {
    this.location.back();
  }

}
