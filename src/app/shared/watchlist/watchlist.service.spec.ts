import { TestBed, inject } from '@angular/core/testing';

import { WatchlistService } from './watchlist.service';

describe('WatchlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchlistService]
    });
  });

  it('should ...', inject([WatchlistService], (service: WatchlistService) => {
    expect(service).toBeTruthy();
  }));
});
