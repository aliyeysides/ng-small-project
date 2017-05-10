import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'psp-symbol-search',
  templateUrl: './symbol-search.component.html',
  styleUrls: ['./symbol-search.component.scss']
})
export class SymbolSearchComponent implements OnInit {

  public symbolSearchForm: FormControl;

  constructor() {
    this.symbolSearchForm = new FormControl();
  }

  ngOnInit() {
    this.symbolSearchForm.valueChanges.subscribe(
      val => console.log('value from search', val)
    )
  }

}
