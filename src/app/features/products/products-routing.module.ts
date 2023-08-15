import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  { path: ':id', component: ProductItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
