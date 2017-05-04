import {Component, OnInit} from '@angular/core';

import {SharedService} from '../../../shared/shared.service';

@Component({
  selector: 'psp-john-schlitz',
  templateUrl: './john-schlitz.component.html',
  styleUrls: ['./john-schlitz.component.scss']
})
export class JohnSchlitzComponent implements OnInit {

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    window.scrollTo(0,0); // scrolls to top of page
    this.sharedService.setReturnIconVisible(true);
  }

}
