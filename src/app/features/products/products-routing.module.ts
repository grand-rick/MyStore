import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { productsGuard } from './guards/products.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: {
      products: productsGuard
    }
  },
  { path: ':id', component: ProductItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
