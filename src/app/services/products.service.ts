import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  currentProduct: Product;

  constructor() { 
    this.currentProduct = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  setCurrentProduct(selectedProduct: Product): Product {
    this.currentProduct = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }; //resetting the current product value

    this.currentProduct = selectedProduct;

    return this.currentProduct;
  }

  getCurrentProduct(): Product {
    return this.currentProduct;
  }

  getNumberOfProducts(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
}
