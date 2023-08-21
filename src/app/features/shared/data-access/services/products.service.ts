import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = 'https://fakestoreapi.com/products';

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    amount: 0,
    url: ''
  };
  
  cartProducts: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

  // getProductById(id: number): Product {
  //   this.getProducts().subscribe(products => {
  //     let product = this.product;

  //     for (let i = 0, n = products.length; i < n; i++) {
  //       if (products[i].id == id) {
  //         product = products[i];
  //         break;
  //       }
  //     }
  //     this.product = product;
      
  //     return this.product;
  //   })
  // }

  getNumberOfProducts(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  addProductToCart(product: Product): Product[] {
    /* The line `const productIndex = this.cartProducts.findIndex(p => p.name === product.name);` is
    finding the index of a product in the `cartProducts` array based on its name. */
    const productIndex = this.cartProducts.findIndex(p => p.name === product.name);

    if (productIndex >= 0) {
      this.cartProducts[productIndex].amount += product.amount;
      return this.cartProducts;
    }
    
    this.cartProducts.unshift(product);
    
    return this.cartProducts;
  }

  editCartProduct(product: Product): Product[] {
    this.cartProducts = this.cartProducts.map(p => {
      if (p.id == product.id) {
        p.amount = product.amount;
      }
      return p;
    })
    return this.cartProducts;
  }

  removeCartProduct(product: Product): Product[] {
    this.cartProducts = this.cartProducts.filter(p => p.name != product.name);
    return this.cartProducts;
  }

  clearCartProducts(): Product[] {
    this.cartProducts = [];
    return this.cartProducts;
  }

  getTotalPrice(num?: number): number {
    let tPrice: number = 0
    for (let i = 0, n = this.cartProducts.length; i < n; i++) {
      tPrice += +this.cartProducts[i].amount  * +this.cartProducts[i].price;
    }
    return tPrice.toFixed(num || 2) as unknown as number;
  }
  
}