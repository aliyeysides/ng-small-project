import { TestBed, inject } from '@angular/core/testing';

import { InsightService } from './insight.service';

describe('InsightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsightService]
    });
  });

  it('should ...', inject([InsightService], (service: InsightService) => {
    expect(service).toBeTruthy();
  }));
});
