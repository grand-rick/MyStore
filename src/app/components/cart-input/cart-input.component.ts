import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';

interface CartP {
  id: number;
  amount: number;
}

@Component({
  selector: 'app-cart-input',
  templateUrl: './cart-input.component.html',
  styleUrls: ['./cart-input.component.css']
})

export class CartInputComponent implements OnInit {
  @Input() product: Product;
  @Output() removeProduct: EventEmitter<Product> = new EventEmitter();

  cartPs: CartP[] = [];
  amount: number;

  constructor (private productsServices: ProductsService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      amount: 0
    }
    this.amount = this.product.amount;
  }

  ngOnInit(): void {
    this.productsServices.getCartProducts().forEach(product => {
      let cartObject: CartP = {
        id: product.id,
        amount: product.amount
      };
      this.cartPs.unshift(cartObject);
    });
  }

  onInputChange(event: Event): number {
    // this.amount = newInput;
    this.getTotalPrice();
    return +(event.target as HTMLInputElement).value;
  }

  removeCartProduct(product: Product) {
    this.removeProduct.emit(product);
  }

  getTotalPrice(): number {
    return this.productsServices.getTotalPrice().toFixed(2) as unknown as number;
  }
}