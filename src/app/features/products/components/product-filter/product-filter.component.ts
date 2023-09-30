import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
  imports: [NgFor, FormsModule, CommonModule],
})
export class ProductFilterComponent {

  prices = [
    { id: 1, checked: true, name: 'Hasta S/ 50' },
    { id: 2, checked: true, name: 'S/ 50 - S/ 100' },
    { id: 3, checked: true, name: 'S/ 100 - S/ 250' },
    { id: 4, checked: true, name: 'S/ 250 - S/ 500' },
    { id: 5, checked: true, name: 'S/ 500 - S/ 1000' },
    { id: 6, checked: true, name: 'S/ 1000 - Más' },
  ];

  products = [
    { id: 1, checked: true, name: 'Less than 10%' },
    { id: 2, checked: true, name: '10% or more' },
    { id: 3, checked: true, name: '20% or more' },
    { id: 4, checked: true, name: '30% or more' },
    { id: 5, checked: true, name: '40% or more' },
    { id: 6, checked: true, name: '50% or more' },
  ];

  rating = [
    { id: 1, checked: true, name: '4 ⭐️' },
    { id: 2, checked: true, name: '3 ⭐️' },
    { id: 3, checked: true, name: '2 ⭐️' },
    { id: 4, checked: true, name: '1 ⭐️' },
  ];

  filterProducts() {}

  filterItem() {}

  filterPrice() {}
}
