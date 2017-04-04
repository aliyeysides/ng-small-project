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
  public visible: boolean;
  @Output() userSettingsOpen: EventEmitter<any> = new EventEmitter();
  @Output() userSettingsClose: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.userSettingsOpen.emit(null);
    } else {
      this.userSettingsClose.emit(null);
    }
  }
}