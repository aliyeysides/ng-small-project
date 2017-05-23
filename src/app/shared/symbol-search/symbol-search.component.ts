import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SymbolSearchService} from "./symbol-search.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Component({
  selector: 'psp-symbol-search',
  templateUrl: './symbol-search.component.html',
  styleUrls: ['./symbol-search.component.scss']
})
export class SymbolSearchComponent implements OnInit {

  public symbolSearchForm: FormControl;
  public searchResults: Array<any>;

  constructor(private symbolSearchService: SymbolSearchService, private router: Router) {
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

  public gotoReport(ticker: string): void {
    this.router.navigate(['/power-gauge-report', ticker]);
    this.symbolSearchForm.reset();
  }

  public onSubmit() {
    this.gotoReport(this.searchResults[0].Symbol);
    this.symbolSearchForm.reset()
  }

}
