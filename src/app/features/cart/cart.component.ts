import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/features/shared/data-access/models/Product';
import { ProductsService } from 'src/app/features/shared/data-access/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartProducts: Product[] = this.productsService.getCartProducts();
  totalPrice: number =  this.getTotalPrice();
  isCartEmpty: boolean;
  fullName: string = '';
  address: string = '';
  creditCardNumber: number = 0;

  constructor (private productsService: ProductsService, private router: Router) {
    this.isCartEmpty = this.emptyCartHandler();
  }

  ngOnInit(): void {
    this.totalPrice = this.getTotalPrice();
  }

  removeCartProduct(product: Product): void {
    this.cartProducts = this.productsService.removeCartProduct(product);
    this.totalPrice = this.getTotalPrice();
    this.isCartEmpty = this.emptyCartHandler();
    alert(`${product.name} has been removed from cart`);
  }

  getTotalPrice(): number {
    return this.productsService.getTotalPrice();
  }

  checkOut() {
    this.goToCheckOut();
  }

  emptyCartHandler(): boolean {
    const hasProducts = this.productsService.getCartProducts().length;
    if (hasProducts) {
      return false;
    }
    return true;
  }

  goToCheckOut() {
    const cartIds = this.cartProducts.map(p => p.id).join('') as unknown as number;
    this.router.navigate(['/cart/check-out']);
  }

  onInputChange(event: Event): number {
    let id: number = +(event.target as HTMLInputElement).id;
    let value: number = +(event.target as HTMLInputElement).value;

    if (value < 0) {
      value = 0;
    }

    this.cartProducts.forEach(p => {
      if (p.id == id) {
        p.amount = value;
        this.cartProducts = this.productsService.editCartProduct(p);
      }
    })
    this.totalPrice = this.getTotalPrice();
    return value;
  }
}