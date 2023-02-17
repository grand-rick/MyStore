import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  availableProducts: number[] = [];
  selectedProducts: number = 0;

  constructor (private productsService: ProductsService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0
    }
  }

  ngOnInit(): void {
    this.product = this.productsService.getCurrentProduct();
    this.availableProducts = this.productsService.getNumberOfProducts();
  }

  addToCart(product: Product): void {
    product.amount = +this.selectedProducts;
    this.productsService.addProductToCart(product);
    alert(`${product.name} has been added to cart`);
  }
}
