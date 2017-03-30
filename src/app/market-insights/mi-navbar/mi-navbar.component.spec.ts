import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNavbarComponent } from './mi-navbar.component';

describe('MiSubnavComponent', () => {
  let component: MiNavbarComponent;
  let fixture: ComponentFixture<MiNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
