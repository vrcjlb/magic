import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface FilterValue {
  id: number;
  checked: boolean;
  name: string;
}

interface Filter {
  categories: FilterValue[];
  prices: FilterValue[];
  discount: FilterValue[];
  stars: FilterValue[];
}
@Component({
  standalone: true,
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
  imports: [NgFor, FormsModule, CommonModule],
})
export class ProductFilterComponent {
  @Output() filterEvent = new EventEmitter<Filter>();

  @Input() products!: {
    category: string;
    name: string;
    stars: number;
    reviewCount: string;
    discount: string;
    oldPrice: {
      value: string;
      currency: string;
    };
    newPrice: {
      value: string;
      currency: string;
    };
    description: string;
    details: {
      icon: string;
      text: string;
    }[];
  }[];

  filters: Filter = {
    categories: [],
    prices: [],
    discount: [],
    stars: [],
  };

  constructor() {}

  ngOnInit(): void {
    this.createFilterParamsFromProducts();
  }

  createFilterParamsFromProducts() {
    for (let index = 0; index < this.products.length; index++) {
      const product = this.products[index];
      this.createBaseFilterParams(product.newPrice.value, 'prices');
      this.createBaseFilterParams(product.category, 'categories');
      this.createBaseFilterParams(product.discount, 'discount');
      this.createBaseFilterParams(product.stars.toString(), 'stars');
    }
  }

  createBaseFilterParams(item: string, type: string): void {
    const filterType = type as keyof Filter;
    if (this.findItemInFilter(filterType, item)) {
      this.addFilter(filterType, item);
    }
    this.sortFiltersByName(filterType);
  }

  private findItemInFilter(
    filterType: keyof Filter,
    itemName: string
  ): boolean {
    for (let index = 0; index < this.filters[filterType].length; index++) {
      const element = this.filters[filterType][index];
      if (
        element.name.replace('⭐️', '').trim() ===
        itemName.replace('⭐️', '').trim()
      ) {
        return false;
      }
    }
    return true;
  }

  private addFilter(filterType: keyof Filter, itemName: string): void {
    this.filters[filterType].push({
      id: this.filters[filterType].length + 1,
      checked: true,
      name: itemName + (filterType === 'stars' ? ' ⭐️' : ''),
    });
  }

  private sortFiltersByName(filterType: keyof Filter): void {
    this.filters[filterType].sort((a, b) => a.name.localeCompare(b.name));
  }

  filterAction(): void {
    this.filterEvent.emit(this.filters);
  }
}
