import { Component } from '@angular/core';
import {
  ContainerHeaderComponent,
  ContainerBodyComponent,
  ContainerComponent,
} from 'src/app/shared';
import { DetailOfProductDescriptionComponent } from '../../components/detail-of-product-description/detail-of-product-description.component';
import { DetailOfProductImageComponent } from '../../components/detail-of-product-image/detail-of-product-image.component';

@Component({
  standalone: true,
  selector: 'app-detail-of-product',
  templateUrl: './detail-of-product.component.html',
  styleUrls: ['./detail-of-product.component.scss'],
  imports: [
    DetailOfProductDescriptionComponent,
    DetailOfProductImageComponent,
    ContainerHeaderComponent,
    ContainerBodyComponent,
    ContainerComponent,
  ],
})
export class DetailOfProductComponent {
  header = {
    title: 'Detalle de Producto',
  };
  detail = {
    category: 'Ropa',
    name: 'Camisa de vestir',
    stars: 4,
    reviewCount: '120',
    discount: '10%',
    oldPrice: {
      value: '299.99',
      currency: 'USD',
    },
    newPrice: {
      value: '269.99',
      currency: 'USD',
    },
    description: 'Camisa de vestir para caballero, material de algodón 100%, disponible en diferentes tallas y colores, ideal para cualquier ocasión, cómoda y elegante.',
    details: [
      { icon: 'local_florist', text: 'Lana' },
      { icon: 'sell', text: 'Lavable' },
      { icon: 'square_foot', text: 'Tallas' },
      { icon: 'contrast', text: 'Colors' },
    ],
    images: [
      {
        imageUrl:
          'https://themesbrand.com/skote/layouts/assets/images/product/img-1.png',
      },
      {
        imageUrl:
          'https://themesbrand.com/skote/layouts/assets/images/product/img-2.png',
      },
      {
        imageUrl:
          'https://themesbrand.com/skote/layouts/assets/images/product/img-3.png',
      },
      {
        imageUrl:
          'https://themesbrand.com/skote/layouts/assets/images/product/img-4.png',
      },
    ],
  };
}
