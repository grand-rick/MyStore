import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  myProducts: Product[] = [];
  amount: number = 0;

  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.myProducts = data;
    })
  }

  addToCart(product: Product): void {
    product.amount = this.amount;
    this.productsService.addProductToCart(product);
    alert(`${product.name} has been added to cart`);
  }

  onInputChange(newValue: number) {
    this.amount = newValue;
  }
}
