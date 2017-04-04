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
  visible: boolean;

  constructor() { }

  ngOnInit() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
  }
}