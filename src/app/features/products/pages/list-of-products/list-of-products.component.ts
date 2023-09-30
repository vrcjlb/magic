import { Component } from '@angular/core';
import { ProductMiniCardViewComponent } from '../../components/product-mini-card-view/product-mini-card-view.component';

@Component({
  standalone: true,
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
  imports: [ProductMiniCardViewComponent],
})
export class ListOfProductsComponent {}
