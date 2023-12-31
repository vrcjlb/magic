import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-product-mini-card-view',
  templateUrl: './product-mini-card-view.component.html',
  styleUrls: ['./product-mini-card-view.component.scss'],
  imports: [NgFor],
})
export class ProductMiniCardViewComponent {
  @Input() data!: {
    category: string;
    name: string;
    image: {
      imageUrl: string;
    }[];
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
  };
}
