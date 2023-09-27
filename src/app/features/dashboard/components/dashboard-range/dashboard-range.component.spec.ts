import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRangeComponent } from './dashboard-range.component';

describe('DashboardRangeComponent', () => {
  let component: DashboardRangeComponent;
  let fixture: ComponentFixture<DashboardRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
