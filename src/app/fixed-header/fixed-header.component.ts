import { Router, Event, NavigationEnd } from '@angular/router';

import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'psp-fixed-header',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.scss']
})
export class FixedHeaderComponent implements OnInit {
  settingsVisible: boolean;
  isRouteDashboard: boolean;

  constructor(
    private router: Router
  ){ }

  ngOnInit() {
    this.settingsVisible = false;

    this.router.events
        .subscribe(path => {
          if (path instanceof NavigationEnd){
            this.checkRouteDashboard(path.url);
          }
        })
  }

  checkRouteDashboard(url: String): void {
    if (url == '/' || url == '/dashboard') {
      this.isRouteDashboard = true;
    } else {
      this.isRouteDashboard = false;
    }
  }

  toggle() {
    this.settingsVisible = !this.settingsVisible;
  }
}
