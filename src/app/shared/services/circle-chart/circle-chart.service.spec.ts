import { TestBed } from '@angular/core/testing';

import { CircleChartService } from './circle-chart.service';

describe('CircleChartService', () => {
  let service: CircleChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircleChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
