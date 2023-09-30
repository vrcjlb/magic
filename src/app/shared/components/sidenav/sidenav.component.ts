import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [NgFor, NgIf],
})
export class SidenavComponent {
  menu = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
    },
    {
      label: 'Productos',
      icon: 'shopping_cart',
      showSubMenu: false,
      subMenu: [
        { label: 'Lista de Productos' },
        { label: 'Detalle de producto' },
        { label: 'Añadir Producto' },
      ],
    },
    {
      label: 'Clientes',
      icon: 'person',
      showSubMenu: false,
      subMenu: [
        { label: 'Lista de Clientes' },
        { label: 'Detalle de Cliente' },
        { label: 'Añadir Cliente' },
      ],
    },
    {
      label: 'Proveedores',
      icon: 'local_shipping',
      showSubMenu: false,
      subMenu: [
        { label: 'Lista de Proveedores' },
        { label: 'Detalle de Proveedor' },
        { label: 'Añadir Proveedor' },
      ],
    },
    {
      label: 'Compras y ventas',
      icon: 'shopping_basket',
      showSubMenu: false,
      subMenu: [
        { label: 'Ordenes' },
        { label: 'Carrito' },
        { label: 'Confirmación' },
        { label: 'Tiendas' },
      ],
    },
    {
      label: 'Facturación',
      icon: 'receipt',
      showSubMenu: false,
      subMenu: [
        { label: 'Lista de facturas' },
        { label: 'Detalle de Factura' },
      ],
    },
  ];

  toggleSubMenu(item: any) {
    item.showSubMenu = !item.showSubMenu;
  }
}
