import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/features/shared/data-access/models/Product';
import { ProductsService } from 'src/app/features/shared/data-access/services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  @Output() inputChange: EventEmitter<number> = new EventEmitter();
  availableProducts: number[] = [];
  selectedProducts: number = 0;
  

  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {
    this.availableProducts = this.productsService.getNumberOfProducts();
  }

  onSubmitForm(product: Product): void {
    this.addToCart.emit(product);
    this.selectedProducts = 0;
  }

  onInputChange(newValue: number): void {
    this.inputChange.emit(newValue);
  }
}