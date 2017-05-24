import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {SecondaryHeaderComponent} from "../../shared/secondary-header/secondary-header.component";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'psp-pgr-header',
  templateUrl: './pgr-header.component.html',
  styleUrls: ['./pgr-header.component.scss']
})
export class PgrHeaderComponent extends SecondaryHeaderComponent {

  constructor(location: Location,
              sharedService: SharedService) {
    super(location, sharedService);
    sharedService.setReturnIconVisible(true);
  }

  goBack() {
    super.goBack();
  }
}
