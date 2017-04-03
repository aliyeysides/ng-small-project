import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPreviewComponent } from './mi-preview.component';

describe('MiPreviewComponent', () => {
  let component: MiPreviewComponent;
  let fixture: ComponentFixture<MiPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
