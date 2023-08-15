import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
