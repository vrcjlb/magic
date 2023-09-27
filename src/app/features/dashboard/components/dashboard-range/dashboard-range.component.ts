import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Chart } from 'chart.js';
import { CircleChartService } from 'src/app/shared/services';

@Component({
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  selector: 'app-dashboard-range',
  templateUrl: './dashboard-range.component.html',
  styleUrls: ['./dashboard-range.component.scss'],
})
export class DashboardRangeComponent {
  chart!: Chart<'doughnut', string[], string>;

  constructor(private circleChartService: CircleChartService) {}

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.chart = this.circleChartService.create(
      'range',
      ['Ingresos A', 'Ingresos B', 'Ingresos C'],
      [
        {
          label: 'S/',
          data: ['300', '50', '100'],
          backgroundColor: [
            'rgb(85, 110, 230)',
            'rgb(241, 180, 76)',
            'rgb(52, 195, 143)',
          ],
          hoverOffset: 4,
        },
      ]
    );
  }
}
