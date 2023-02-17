import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice: number = 0;

  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {
    this.cartProducts = this.productsService.getCartProducts();
    this.totalPrice = this.getTotalPrice();
  }

  removeCartProduct(product: Product): void {
    this.cartProducts = this.productsService.removeCartProduct(product);
    alert(`${product.name} has been removed from cart`)
  }

  getTotalPrice(): number {
    for (let i = 0, n = this.cartProducts.length; i < n; i++) {
      this.totalPrice += +this.cartProducts[i].amount * +this.cartProducts[i].price;
    }
    return this.totalPrice;
  }
}