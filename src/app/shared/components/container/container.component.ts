import { Component } from '@angular/core';
import { SidenavComponent } from './../sidenav/sidenav.component';
import { ToolbarComponent } from './../toolbar/toolbar.component';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [SidenavComponent, ToolbarComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {}
