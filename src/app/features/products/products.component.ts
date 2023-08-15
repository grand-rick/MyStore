import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/features/shared/data-access/models/Product';
import { ProductsService } from 'src/app/features/shared/data-access/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myProducts$: Observable<Product[]> = this.productsService.getProducts();
  amount: number = 0;

  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    product.amount = this.amount;
    this.productsService.addProductToCart(product);
    alert(`${product.name} has been added to cart`);
  }

  onInputChange(newValue: number) {
    this.amount = newValue;
  }
}
