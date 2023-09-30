import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';import { RouterModule } from '@angular/router';
import {
  ContainerHeaderComponent,
  ContainerBodyComponent,
  ContainerComponent,
} from 'src/app/shared';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContainerHeaderComponent,
    ContainerBodyComponent,
    ContainerComponent,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  header = {
    title: 'Products',
  };
}
