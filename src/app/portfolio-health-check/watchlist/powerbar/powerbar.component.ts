import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psp-powerbar',
  templateUrl: './powerbar.component.html',
  styleUrls: ['./powerbar.component.scss']
})
export class PowerbarComponent implements OnInit {

  stacked: any[] = [];

  constructor() { }

  ngOnInit() {
    this.stacked = [
      {
        value: 25,
        type: 'success'
      },
      {
        value: 125,
        type: 'warning'
      },
      {
        value: 20,
        type: 'danger'
      }
    ]
  }

}
