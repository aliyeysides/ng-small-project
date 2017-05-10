import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'psp-sidebar',
  templateUrl: './insights-sidebar.component.html',
  styleUrls: ['./insights-sidebar.component.scss']
})
export class InsightsSidebarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  gotoAbout(name: string): void {
    this.router.navigate(['/market-insights/about', name]);
  }

}
