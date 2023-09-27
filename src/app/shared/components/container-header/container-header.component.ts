import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-container-header',
  templateUrl: './container-header.component.html',
  styleUrls: ['./container-header.component.scss'],
  imports: [MatToolbarModule],
})
export class ContainerHeaderComponent {
  @Input() data!: {
    title: string;
  };
}
