import { Component } from '@angular/core';
import {
  ContainerHeaderComponent,
  ContainerBodyComponent,
  ContainerComponent,
} from 'src/app/shared';
import { ProductMiniCardViewComponent } from '../../components/product-mini-card-view/product-mini-card-view.component';
import { ProductFilterComponent } from '../../components/product-filter/product-filter.component';
import { NgFor, NgIf } from '@angular/common';

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
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
  imports: [
    NgFor,
    NgIf,
    ProductMiniCardViewComponent,
    ProductFilterComponent,
    ContainerHeaderComponent,
    ContainerBodyComponent,
    ContainerComponent,
  ],
})
export class ListOfProductsComponent {
  header = {
    title: 'Lista de Productos',
  };
  products = [
    {
      category: 'Ropa',
      name: 'Polo rojo',
      stars: 2,
      reviewCount: '85',
      discount: '15%',
      oldPrice: {
        value: '39.99',
        currency: 'USD',
      },
      newPrice: {
        value: '33.99',
        currency: 'USD',
      },
      description:
        'Polo de algodón para hombre, disponible en diferentes tallas y colores, cómodo y versátil.',
      details: [
        { icon: 'local_florist', text: 'Algodón' },
        { icon: 'sell', text: 'Lavable' },
        { icon: 'square_foot', text: 'Tallas' },
        { icon: 'contrast', text: 'Colors' },
      ],
      image: [
        {
          imageUrl:
            'https://themesbrand.com/skote/layouts/assets/images/product/img-1.png',
        },
      ],
    },
    {
      category: 'Ropa',
      name: 'Polo celeste mujer',
      stars: 3,
      reviewCount: '92',
      discount: '20%',
      oldPrice: {
        value: '49.99',
        currency: 'USD',
      },
      newPrice: {
        value: '39.99',
        currency: 'USD',
      },
      description:
        'Polo de algodón para mujer, disponible en diferentes tallas y colores, fresco y elegante.',
      details: [
        { icon: 'local_florist', text: 'Algodón' },
        { icon: 'sell', text: 'Lavable' },
        { icon: 'square_foot', text: 'Tallas' },
        { icon: 'contrast', text: 'Colors' },
      ],
      image: [
        {
          imageUrl:
            'https://themesbrand.com/skote/layouts/assets/images/product/img-2.png',
        },
      ],
    },
    {
      category: 'Ropa',
      name: 'Polo negro',
      stars: 5,
      reviewCount: '78',
      discount: '10%',
      oldPrice: {
        value: '44.99',
        currency: 'USD',
      },
      newPrice: {
        value: '40.49',
        currency: 'USD',
      },
      description:
        'Polo de algodón para hombre, disponible en diferentes tallas y colores, ideal para cualquier ocasión.',
      details: [
        { icon: 'local_florist', text: 'Algodón' },
        { icon: 'sell', text: 'Lavable' },
        { icon: 'square_foot', text: 'Tallas' },
        { icon: 'contrast', text: 'Colors' },
      ],
      image: [
        {
          imageUrl:
            'https://themesbrand.com/skote/layouts/assets/images/product/img-3.png',
        },
      ],
    },
    {
      category: 'Ropa',
      name: 'Chompa azul',
      stars: 1,
      reviewCount: '105',
      discount: '25%',
      oldPrice: {
        value: '79.99',
        currency: 'USD',
      },
      newPrice: {
        value: '59.99',
        currency: 'USD',
      },
      description:
        'Chompa de lana para hombre, disponible en diferentes tallas y colores, abrigada y moderna.',
      details: [
        { icon: 'local_florist', text: 'Lana' },
        { icon: 'sell', text: 'Lavable' },
        { icon: 'square_foot', text: 'Tallas' },
        { icon: 'contrast', text: 'Colors' },
      ],
      image: [
        {
          imageUrl:
            'https://themesbrand.com/skote/layouts/assets/images/product/img-4.png',
        },
      ],
    },
    {
      category: 'Ropa',
      name: 'Polo rosa mujer',
      stars: 4,
      reviewCount: '88',
      discount: '15%',
      oldPrice: {
        value: '45.99',
        currency: 'USD',
      },
      newPrice: {
        value: '39.09',
        currency: 'USD',
      },
      description:
        'Polo de algodón para mujer, disponible en diferentes tallas y colores, fresco y elegante.',
      details: [
        { icon: 'local_florist', text: 'Algodón' },
        { icon: 'sell', text: 'Lavable' },
        { icon: 'square_foot', text: 'Tallas' },
        { icon: 'contrast', text: 'Colors' },
      ],
      image: [
        {
          imageUrl:
            'https://themesbrand.com/skote/layouts/assets/images/product/img-5.png',
        },
      ],
    },
    {
      category: 'Ropa',
      name: 'Polo verde mujer',
      stars: 4,
      reviewCount: '96',
      discount: '20%',
      oldPrice: {
        value: '49.99',
        currency: 'USD',
      },
      newPrice: {
        value: '39.99',
        currency: 'USD',
      },
      description:
        'Polo de algodón para mujer, disponible en diferentes tallas y colores, fresco y elegante.',
      details: [
        { icon: 'local_florist', text: 'Algodón' },
        { icon: 'sell', text: 'Lavable' },
        { icon: 'square_foot', text: 'Tallas' },
        { icon: 'contrast', text: 'Colors' },
      ],
      image: [
        {
          imageUrl:
            'https://themesbrand.com/skote/layouts/assets/images/product/img-6.png',
        },
      ],
    },
    {
      category: 'Electrónica',
      name: 'Audífonos inalámbricos',
      stars: 4,
      reviewCount: '120',
      discount: '30%',
      oldPrice: {
        value: '79.99',
        currency: 'USD',
      },
      newPrice: {
        value: '55.99',
        currency: 'USD',
      },
      description:
        'Audífonos inalámbricos con sonido de alta calidad, conexión Bluetooth, y larga duración de batería.',
      details: [
        { icon: 'bluetooth', text: 'Conexión Bluetooth' },
        { icon: 'battery_full', text: 'Larga duración de batería' },
        { icon: 'headset', text: 'Sonido de alta calidad' },
      ],
      image: [
        {
          imageUrl:
            'https://themesbrand.com/skote/layouts/assets/images/product/img-7.png',
        },
      ],
    },
  ];

  filterSearch($event: any) {
    const textToSearch = $event.target.value;
    this.productsFiltered = [];
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      if (
        element.name
          .toString()
          .replace('⭐️', '')
          .trim()
          .toLowerCase()
          .indexOf(textToSearch.trim().toLowerCase()) > -1
      ) {
        this.productsFiltered.push(element);
      }
    }
  }

  productsFiltered = this.products;
  filterEvent(event: Filter) {
    this.productsFiltered = [];
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      if (
        !this.filterProduct(
          event,
          element.category,
          element.newPrice.value,
          element.discount,
          element.stars.toString()
        )
      ) {
        this.productsFiltered.push(element);
      }
    }
  }
  filterProduct(
    filter: Filter,
    category: string,
    price: string,
    discount: string,
    star: string
  ): boolean {
    return (
      this.checkItem(filter.categories, category) ||
      this.checkItem(filter.prices, price) ||
      this.checkItem(filter.discount, discount) ||
      this.checkItem(filter.stars, star.replace('⭐️', '').trim())
    );
  }

  private checkItem(value: FilterValue[], item: string): boolean {
    return value.some(
      (element) =>
        !element.checked && element.name.replace('⭐️', '').trim() === item
    );
  }
}
