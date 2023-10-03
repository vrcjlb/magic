import { Component } from '@angular/core';
import {
  ContainerBodyComponent,
  ContainerComponent,
  ContainerHeaderComponent,
} from 'src/app/shared';
import { CreateProductBasicInformationComponent } from '../../components/create-product-basic-information/create-product-basic-information.component';
import { CreateProductImagesComponent } from '../../components/create-product-images/create-product-images.component';
import { CreateProductMetaDataComponent } from '../../components/create-product-meta-data/create-product-meta-data.component';

@Component({
  standalone: true,
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  imports: [
    CreateProductBasicInformationComponent,
    CreateProductImagesComponent,
    CreateProductMetaDataComponent,
    ContainerHeaderComponent,
    ContainerBodyComponent,
    ContainerComponent,
  ],
})
export class CreateProductComponent {
  header = {
    title: 'Crear Producto',
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
    description:
      'Camisa de vestir para caballero, material de algodón 100%, disponible en diferentes tallas y colores, ideal para cualquier ocasión, cómoda y elegante.',
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
