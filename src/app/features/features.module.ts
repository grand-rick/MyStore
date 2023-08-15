import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CheckOutModule } from './check-out/check-out.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ProductsModule,
    CartModule,
    CheckOutModule
  ]
})
export class FeaturesModule { }
