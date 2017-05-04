import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutChaikinAnalyticsComponent } from './about-chaikin-analytics.component';

describe('AboutChaikinAnalyticsComponent', () => {
  let component: AboutChaikinAnalyticsComponent;
  let fixture: ComponentFixture<AboutChaikinAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutChaikinAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutChaikinAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
