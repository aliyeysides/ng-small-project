import { TestBed, inject } from '@angular/core/testing';

import { SymbolSearchService } from './symbol-search.service';

describe('SymbolSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SymbolSearchService]
    });
  });

  it('should ...', inject([SymbolSearchService], (service: SymbolSearchService) => {
    expect(service).toBeTruthy();
  }));
});
