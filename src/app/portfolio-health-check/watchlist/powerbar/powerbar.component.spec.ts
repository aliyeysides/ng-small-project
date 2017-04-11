import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerbarComponent } from './powerbar.component';

describe('PowerbarComponent', () => {
  let component: PowerbarComponent;
  let fixture: ComponentFixture<PowerbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
