import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [NgFor, NgIf, RouterLink],
})
export class SidenavComponent {
  menu = [
    {
      link: '',
      label: 'Dashboard',
      icon: 'dashboard',
    },
    {
      label: 'Productos',
      icon: 'shopping_cart',
      showSubMenu: false,
      subMenu: [
        { link: '/products/list', label: 'Lista de Productos' },
        { link: '/products/detail', label: 'Detalle de producto' },
        { link: '/products/create', label: 'Añadir Producto' },
      ],
    },
    {
      label: 'Clientes',
      icon: 'person',
      showSubMenu: false,
      subMenu: [
        { link: '', label: 'Lista de Clientes' },
        { link: '', label: 'Detalle de Cliente' },
        { link: '', label: 'Añadir Cliente' },
      ],
    },
    {
      label: 'Proveedores',
      icon: 'local_shipping',
      showSubMenu: false,
      subMenu: [
        { link: '', label: 'Lista de Proveedores' },
        { link: '', label: 'Detalle de Proveedor' },
        { link: '', label: 'Añadir Proveedor' },
      ],
    },
    {
      label: 'Compras y ventas',
      icon: 'shopping_basket',
      showSubMenu: false,
      subMenu: [
        { link: '', label: 'Ordenes' },
        { link: '', label: 'Carrito' },
        { link: '', label: 'Confirmación' },
        { link: '', label: 'Tiendas' },
      ],
    },
    {
      label: 'Facturación',
      icon: 'receipt',
      showSubMenu: false,
      subMenu: [
        { link: '', label: 'Lista de facturas' },
        { link: '', label: 'Detalle de Factura' },
      ],
    },
  ];

  toggleSubMenu(item: any) {
    item.showSubMenu = !item.showSubMenu;
  }
}
