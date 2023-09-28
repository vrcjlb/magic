import { Component } from '@angular/core';
import { NgFor, NgIf, DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [],
})
export class SidenavComponent {
  menu = [
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
