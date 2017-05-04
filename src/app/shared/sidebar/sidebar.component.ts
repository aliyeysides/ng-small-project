import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'psp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  gotoAbout(name: string): void {
    this.router.navigate(['/about', name]);
  }

}
