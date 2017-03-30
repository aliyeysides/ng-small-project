import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketInsightsComponent } from './market-insights.component';

describe('MarketInsightsComponent', () => {
  let component: MarketInsightsComponent;
  let fixture: ComponentFixture<MarketInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
