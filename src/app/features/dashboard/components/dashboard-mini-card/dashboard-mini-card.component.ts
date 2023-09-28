import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-dashboard-mini-card',
  templateUrl: './dashboard-mini-card.component.html',
  styleUrls: ['./dashboard-mini-card.component.scss'],
})
export class DashboardMiniCardComponent {
  @Input() data!: {
    title: string;
    icon: string;
    value: string;
  };
}
