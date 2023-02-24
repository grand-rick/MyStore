import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';
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
    alert(`You have checked Out!`);
    this.goToProductList();
  }

  ngOnInit(): void {}

  goToProductList() {
    this.router.navigate(['/']);
  }
}
