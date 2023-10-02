import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-of-product-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-of-product-description.component.html',
  styleUrls: ['./detail-of-product-description.component.scss'],
})
export class DetailOfProductDescriptionComponent {
  @Input() data!: {
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
  };
}
