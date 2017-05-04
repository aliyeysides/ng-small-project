import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcChaikinComponent } from './marc-chaikin.component';

describe('MarcChaikinComponent', () => {
  let component: MarcChaikinComponent;
  let fixture: ComponentFixture<MarcChaikinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcChaikinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcChaikinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
