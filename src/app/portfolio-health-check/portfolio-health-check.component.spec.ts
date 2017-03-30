import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHealthCheckComponent } from './portfolio-health-check.component';

describe('PortfolioHealthCheckComponent', () => {
  let component: PortfolioHealthCheckComponent;
  let fixture: ComponentFixture<PortfolioHealthCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioHealthCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHealthCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
