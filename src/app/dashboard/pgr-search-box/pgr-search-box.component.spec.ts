import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrSearchBoxComponent } from './pgr-search-box.component';

describe('PgrSearchBoxComponent', () => {
  let component: PgrSearchBoxComponent;
  let fixture: ComponentFixture<PgrSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgrSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgrSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
