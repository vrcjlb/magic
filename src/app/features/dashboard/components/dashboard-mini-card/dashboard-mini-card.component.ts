import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
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
