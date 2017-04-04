import { Component } from '@angular/core';

@Component({
  selector: 'psp-date-dropdown',
  templateUrl: './date-dropdown.component.html',
  styleUrls: ['./date-dropdown.component.scss']
})
export class DateDropdownComponent {
  public status: {isopen: boolean} = {isopen: false};

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
