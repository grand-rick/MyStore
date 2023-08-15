import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/data-access/models/Product';
import { ProductsService } from '../shared/data-access/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})

export class CheckOutComponent implements OnInit {
  totalPrice: number = this.productsService.getTotalPrice();
  cartProducts: Product[] = this.productsService.getCartProducts();

  constructor (private productsService: ProductsService, private router: Router) {}

  checkOut(): void {
    window.alert(`You have checked Out!`);
    this.productsService.clearCartProducts();
    this.goToProductList();
  }

  ngOnInit(): void {}

  goToProductList() {
    this.router.navigateByUrl('');
  }
}
