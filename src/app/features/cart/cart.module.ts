import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms';
import { CheckOutModule } from './check-out/check-out.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    // CheckOutModule
  ]
})
export class CartModule { }
