import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidenavComponent } from './../sidenav/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [MatGridListModule, SidenavComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {}
