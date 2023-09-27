import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BarChartService } from 'src/app/shared/services';

@Component({
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  selector: 'app-dashboard-banner-chart',
  templateUrl: './dashboard-banner-chart.component.html',
  styleUrls: ['./dashboard-banner-chart.component.scss'],
  providers: [BarChartService],
})
export class DashboardBannerChartComponent {
  chart!: Chart<'bar', string[], string>;

  constructor(private barChartService: BarChartService) {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = this.barChartService.create(
      'banner',
      [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
      ],
      [
        {
          label: 'Seria A',
          data: ['67', '57', '57', '7', '22', '74', '57', '56', '29', '57', '57', '57'],
          backgroundColor: '#556ee6',
          borderSkipped: true,
          stack: 'Stack 0',
        },
        {
          label: 'Seria B',
          data: ['42', '54', '53', '32', '17', '38', '53', '51', '29', '57', '57', '57'],
          backgroundColor: '#f1b44c',
          borderSkipped: true,
          stack: 'Stack 0',
        },
        {
          label: 'Seria C',
          data: ['42', '54', '53', '32', '17', '2', '53', '51', '29', '57', '57', '57'],
          backgroundColor: '#34c38f',
          borderSkipped: true,
          stack: 'Stack 0',
        },
      ]
    );
  }
}
