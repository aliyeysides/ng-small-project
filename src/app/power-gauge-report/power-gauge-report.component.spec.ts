import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerGaugeReportComponent } from './power-gauge-report.component';

describe('PowerGaugeReportComponent', () => {
  let component: PowerGaugeReportComponent;
  let fixture: ComponentFixture<PowerGaugeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerGaugeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerGaugeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
