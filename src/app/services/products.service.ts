import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/Product';
import { CartProduct } from 'src/app/models/CartProduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  currentProduct: Product;
  cartProducts: CartProduct[] =[];

  constructor(private http: HttpClient) { 
    this.currentProduct = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
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

  getCartProducts(): CartProduct[] {
    return this.cartProducts;
  }

  addProductToCart(product: CartProduct): CartProduct[] {
    if (!this.cartProducts.includes(product)) {
      this.cartProducts.unshift(product);
    }
    return this.cartProducts;
  }

  removeCartProduct(product: CartProduct): CartProduct[] {
    this.cartProducts = this.cartProducts.filter(p => p.name != product.name);
    return this.cartProducts;
  }
}
