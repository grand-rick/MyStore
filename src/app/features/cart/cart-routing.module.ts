import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path:'',
    component: CartComponent,
  },
  {
    path: 'check-out',
    loadChildren: () => import('./check-out/check-out.module').then(m => m.CheckOutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
