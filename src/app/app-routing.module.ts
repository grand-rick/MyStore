import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { CartComponent } from './features/cart/cart.component';
import { ProductItemDetailComponent } from './features/products/product-item-detail/product-item-detail.component';
import { CheckOutComponent } from './features/check-out/check-out.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  { 
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'check-out',
    loadChildren: () => import('./features/check-out/check-out.module').then(m => m.CheckOutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
