import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTrackingComponent } from './dashboard-tracking.component';

describe('DashboardTrackingComponent', () => {
  let component: DashboardTrackingComponent;
  let fixture: ComponentFixture<DashboardTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
