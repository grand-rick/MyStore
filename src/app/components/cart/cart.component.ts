import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

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
    return this.productsService.getTotalPrice().toFixed(2) as unknown as number;
  }

  checkOut() {
    this.productsService.clearCartProducts();
    this.goToDashboard();
    alert(`Checked out!: Your total bill is - \$${this.totalPrice}`);
  }

  emptyCartHandler(): boolean {
    const hasProducts = this.productsService.getCartProducts().length;
    if (hasProducts) {
      return false;
    }
    return true;
  }

  goToDashboard() {
    this.router.navigate(['/']);
  }
}