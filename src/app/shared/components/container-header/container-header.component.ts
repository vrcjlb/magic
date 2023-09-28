import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-container-header',
  templateUrl: './container-header.component.html',
  styleUrls: ['./container-header.component.scss'],
  imports: [],
})
export class ContainerHeaderComponent {
  @Input() data!: {
    title: string;
  };
}
