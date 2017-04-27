import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'psp-fixed-header',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.scss']
})
export class FixedHeaderComponent implements OnInit {

  public settingsVisible: boolean;

  constructor() {
  }

  ngOnInit() {
    this.settingsVisible = false;
  }

  public toggle() {
    this.settingsVisible = !this.settingsVisible;
  }
}
