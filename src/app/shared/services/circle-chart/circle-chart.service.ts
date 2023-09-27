import { Injectable } from '@angular/core';
import Chart from 'chart.js/auto';

@Injectable({
  providedIn: 'root',
})
export class CircleChartService {
  constructor() {}

  create(
    id: string,
    labels: string[],
    datasets: {
      label: string;
      data: string[];
      backgroundColor: string[];
      stack?: string;
      borderColor?: string;
      hoverOffset?: number;
      borderWidth?: number;
      borderRadius?: number;
      borderSkipped?: boolean;
    }[]
  ): Chart<'doughnut', string[], string> {
    return new Chart(id, {
      type: 'doughnut',
      data: {
        labels,
        datasets,
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
