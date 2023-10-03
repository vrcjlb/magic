import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ListOfProductsComponent } from './pages/list-of-products/list-of-products.component';
import { DetailOfProductComponent } from './pages/detail-of-product/detail-of-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'list',
        component: ListOfProductsComponent,
      },
      {
        path: 'detail',
        component: DetailOfProductComponent,
      },
      {
        path: 'create',
        component: CreateProductComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'list',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
