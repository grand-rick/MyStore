import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/features/shared/data-access/models/Product';
import { ProductsService } from 'src/app/features/shared/data-access/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  @Output() inputChange: EventEmitter<number> = new EventEmitter();
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
    this.availableProducts = this.productsService.getNumberOfProducts();
  }

  // I set the current product using the ProductsService to allow sharing of data with the ProductItemDetail component
  setProduct(product: Product): void {
    this.productsService.setCurrentProduct(product);
  }

  onSubmitForm(product: Product): void {
    this.addToCart.emit(product);
    this.selectedProducts = 0;
  }

  onInputChange(newValue: number): void {
    this.inputChange.emit(newValue);
  }
}