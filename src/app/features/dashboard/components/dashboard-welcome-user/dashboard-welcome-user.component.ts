import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dashboard-welcome-user',
  templateUrl: './dashboard-welcome-user.component.html',
  styleUrls: ['./dashboard-welcome-user.component.scss'],
  imports: [],
})
export class DashboardWelcomeUserComponent {
  name = 'Victor Larco';
  jobTitle = 'Software Engineer';
}
