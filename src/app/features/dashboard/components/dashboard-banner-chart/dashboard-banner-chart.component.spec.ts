import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBannerChartComponent } from './dashboard-banner-chart.component';

describe('DashboardBannerChartComponent', () => {
  let component: DashboardBannerChartComponent;
  let fixture: ComponentFixture<DashboardBannerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBannerChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBannerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
