import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import {ActivatedRoute} from "@angular/router";

import {ABOUT} from './about';

@Component({
  selector: 'psp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public subject: any;

  constructor(private sharedService: SharedService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    window.scrollTo(0, 0); // scrolls to top of page
    this.sharedService.setReturnIconVisible(true);
    this.route.params
      .subscribe(params => {
        let name = params['name'].replace(/-/g, '');
        ABOUT.filter(aboutObj => {
          let objName = aboutObj['name'].toLowerCase().replace(/\s/g, '');
          if (objName == name) {
            this.subject = aboutObj;
          }
        })
      });
  }

}
