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

  ngOnInit(): void {}

  onInputChange(newInput: number): void {
    this.amount = newInput;
  }

  removeCartProduct(product: Product) {
    this.removeProduct.emit(product);
  }
}