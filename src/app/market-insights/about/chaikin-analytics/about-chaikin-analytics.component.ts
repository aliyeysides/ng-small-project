import {Component, OnInit} from '@angular/core';

import {SharedService} from "../../../shared/shared.service";

@Component({
  selector: 'psp-about-chaikin-analytics',
  templateUrl: './about-chaikin-analytics.component.html',
  styleUrls: ['./about-chaikin-analytics.component.scss']
})
export class AboutChaikinAnalyticsComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    window.scrollTo(0,0); // scrolls to top of page
    this.sharedService.setReturnIconVisible(true);
  }

}
