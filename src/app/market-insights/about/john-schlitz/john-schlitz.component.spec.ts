import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnSchlitzComponent } from './john-schlitz.component';

describe('JohnSchlitzComponent', () => {
  let component: JohnSchlitzComponent;
  let fixture: ComponentFixture<JohnSchlitzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnSchlitzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnSchlitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
