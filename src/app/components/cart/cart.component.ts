import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/CartProduct';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  isCartEmpty: boolean = Boolean(this.cartProducts.length) || false;

  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {
    this.cartProducts = this.productsService.getCartProducts();
  }

  removeCartProduct(product: CartProduct): void {
    this.cartProducts = this.productsService.removeCartProduct(product);
    alert(`${product.name} has been removed from cart`);
    alert(`The cart has ${this.cartProducts.length} product remaining, isCartEmpty: ${this.isCartEmpty}`);
  }

}
