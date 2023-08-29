import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/features/shared/data-access/models/Product';
import { ProductsService } from 'src/app/features/shared/data-access/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myProducts$ = this.activatedRoute.data as Observable<{ products: Product[] }>;
  amount: number = 0;

  constructor (private productsService: ProductsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe((data) => {
    //   console.log(data['products']);
    // });
  }

  addToCart(product: Product): void {
    product.amount = this.amount;
    this.productsService.addProductToCart(product);
    window.alert(`${product.name} has been added to cart`);
  }

  onInputChange(newValue: number) {
    this.amount = newValue;
  }
}
