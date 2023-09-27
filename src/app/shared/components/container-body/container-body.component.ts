import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  standalone: true,
  selector: 'app-container-body',
  templateUrl: './container-body.component.html',
  styleUrls: ['./container-body.component.scss'],
  imports: [MatGridListModule],
})
export class ContainerBodyComponent {}
