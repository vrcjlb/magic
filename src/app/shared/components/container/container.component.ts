import { Component } from '@angular/core';
import { SidenavComponent } from './../sidenav/sidenav.component';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [SidenavComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {}
