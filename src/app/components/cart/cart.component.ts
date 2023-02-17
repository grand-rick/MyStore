import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = this.productsService.getCartProducts();
  totalPrice: number = 0;

  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {
    this.totalPrice = this.getTotalPrice().toFixed(2) as unknown as number;
  }

  removeCartProduct(product: Product): void {
    this.cartProducts = this.productsService.removeCartProduct(product);
    this.totalPrice = this.getTotalPrice().toFixed(2) as unknown as number;
    alert(`${product.name} has been removed from cart`);
  }

  getTotalPrice(): number {
    let tPrice: number = 0
    for (let i = 0, n = this.cartProducts.length; i < n; i++) {
      tPrice += +this.cartProducts[i].amount  * +this.cartProducts[i].price;
    }
    return tPrice;
  }
}