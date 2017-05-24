import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SymbolSearchService} from "./symbol-search.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {SharedService} from "../shared.service";
import {isNullOrUndefined} from "util";

const INVALIDSYMBOLALERT = {
  type: 'danger',
  msg: `You must enter a valid stock symbol.`
};

@Component({
  selector: 'psp-symbol-search',
  templateUrl: './symbol-search.component.html',
  styleUrls: ['./symbol-search.component.scss']
})
export class SymbolSearchComponent implements OnInit {

  public symbolSearchForm: FormControl;
  public searchResults: Array<any>;

  constructor(private symbolSearchService: SymbolSearchService,
              private router: Router,
              private sharedService: SharedService) {
    this.symbolSearchForm = new FormControl();
  }

  ngOnInit() {
    this.symbolSearchForm.valueChanges
      .switchMap(val => {
        if (!val) {
          return Observable.of([]);
        }
        return this.symbolSearchService.symbolLookup(val)
      })
      .subscribe(val => {
        this.searchResults = val
      });
  }

  public gotoReport(ticker?: string): void {
    if (isNullOrUndefined(ticker)) {
      this.sharedService.addAlert(INVALIDSYMBOLALERT.type, INVALIDSYMBOLALERT.msg);
      return;
    }
    this.router.navigate(['/power-gauge-report', ticker]);
    this.symbolSearchForm.reset();
  }

  public onSubmit(e: Event) {
    e.preventDefault();
    if (isNullOrUndefined(this.searchResults)) {
      this.sharedService.addAlert(INVALIDSYMBOLALERT.type, INVALIDSYMBOLALERT.msg);
      return;
    }
    this.gotoReport(this.searchResults[0].Symbol);
    this.symbolSearchForm.reset();
  }

}
