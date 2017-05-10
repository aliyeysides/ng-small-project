import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SymbolSearchService} from "./symbol-search.service";

@Component({
  selector: 'psp-symbol-search',
  templateUrl: './symbol-search.component.html',
  styleUrls: ['./symbol-search.component.scss']
})
export class SymbolSearchComponent implements OnInit {

  public symbolSearchForm: FormControl;
  public searchResults: Array<object>;

  constructor(private symbolSearchService: SymbolSearchService) {
    this.symbolSearchForm = new FormControl();
  }

  ngOnInit() {
    this.searchResults = [];
    this.symbolSearchForm.valueChanges
      .mergeMap(val => this.symbolSearchService.symbolLookup(val))
      .subscribe(val => this.searchResults = val);
  }

}
