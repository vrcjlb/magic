import { Injectable } from '@angular/core';
import Chart from 'chart.js/auto';

@Injectable({
  providedIn: 'root',
})
export class BarChartService {
  constructor() {}

  create(
    id: string,
    labels: string[],
    datasets: {
      label: string;
      data: string[];
      backgroundColor: string;
      stack?: string;
      borderColor?: string;
      borderWidth?: number;
      borderRadius?: number;
      borderSkipped?: boolean;
    }[]
  ): Chart<'bar', string[], string> {
    return new Chart(id, {
      type: 'bar',
      data: {
        labels,
        datasets,
      },
      options: {
        aspectRatio: 2.5,
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
        datasets: {
          bar: {
            maxBarThickness: 10,
          },
        },
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });
  }
}
