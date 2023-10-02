import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-of-product-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-of-product-image.component.html',
  styleUrls: ['./detail-of-product-image.component.scss'],
})
export class DetailOfProductImageComponent {
  @Input() data!: {
    imageUrl: string;
  }[];
}
