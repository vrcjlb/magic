import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  standalone: true,
  selector: 'app-dashboard-welcome-user',
  templateUrl: './dashboard-welcome-user.component.html',
  styleUrls: ['./dashboard-welcome-user.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatGridListModule, MatIconModule],
})
export class DashboardWelcomeUserComponent {
  name = 'Victor Larco';
  jobTitle = 'Software Engineer';
}
