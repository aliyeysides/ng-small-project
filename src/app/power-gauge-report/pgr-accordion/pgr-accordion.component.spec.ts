import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrAccordionComponent } from './pgr-accordion.component';

describe('PgrAccordionComponent', () => {
  let component: PgrAccordionComponent;
  let fixture: ComponentFixture<PgrAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
