import { Component } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

export interface Menu {
  label: string;
  icon: string;
  link: string;
  subMenu?: Menu[];
}

@Component({
  standalone: true,
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [
    DatePipe,
    NgFor,
    NgIf,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
  ],
})
export class SidenavComponent {
  menu: Menu[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
      subMenu: [
        {
          label: 'Dashboard',
          icon: 'dashboard',
          link: '/dashboard',
        },
        {
          label: 'Dashboard 2',
          icon: 'dashboard',
          link: '/dashboard2',
        },
      ],
    },
    {
      label: 'User',
      icon: 'people',
      link: '/user',
    },
    {
      label: 'Product',
      icon: 'shopping_cart',
      link: '/product',
    },
    {
      label: 'Order',
      icon: 'shopping_basket',
      link: '/order',
    },
    {
      label: 'Report',
      icon: 'report',
      link: '/report',
    },
    {
      label: 'Setting',
      icon: 'settings',
      link: '/setting',
    },
  ];
}
