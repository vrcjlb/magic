import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContainerHeaderComponent,
  ContainerBodyComponent,
  ContainerComponent,
} from 'src/app/shared';
import {
  DashboardWelcomeUserComponent,
  DashboardMiniCardComponent,
  DashboardBannerChartComponent,
  DashboardRangeComponent,
  DashboardTrackingComponent
} from './components';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    CommonModule,
    ContainerHeaderComponent,
    ContainerBodyComponent,
    DashboardTrackingComponent,
    ContainerComponent,
    DashboardWelcomeUserComponent,
    DashboardMiniCardComponent,
    DashboardBannerChartComponent,
    DashboardRangeComponent,
  ],
})
export class DashboardComponent {
  header = {
    title: 'Dashboard',
  };
  miniCard = [
    {
      title: 'Orders',
      icon: 'shopping_cart',
      value: '1,540',
    },
    {
      title: 'Revenue',
      icon: 'monetization_on',
      value: '9,540',
    },
    {
      title: 'Visitors',
      icon: 'group',
      value: '1,540',
    },
  ];
}
