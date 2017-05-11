import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightDetailSidebarComponent } from './insight-detail-sidebar.component';

describe('InsightDetailSidebarComponent', () => {
  let component: InsightDetailSidebarComponent;
  let fixture: ComponentFixture<InsightDetailSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightDetailSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightDetailSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
