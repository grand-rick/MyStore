import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    amount: 0
  }
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
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  addProductToCart(product: Product): Product[] {
    for (let i = 0, n = this.cartProducts.length; i < n; i++) {
      if (this.cartProducts[i].name === product.name) {
        this.cartProducts[i].amount += product.amount;
        return this.cartProducts;
      }
    }
    this.cartProducts.unshift(product);
    return this.cartProducts
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