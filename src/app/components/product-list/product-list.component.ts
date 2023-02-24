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
  selectedProducts: number = 0;


  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.myProducts = data;
    })
  }

  addToCart(product: Product): void {
    product.amount = +this.selectedProducts;
    this.productsService.addProductToCart(product);
    this.selectedProducts = 0;
    alert(`${product.name} has been added to cart`);
  }
}
