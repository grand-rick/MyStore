import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/features/shared/data-access/models/Product';
import { ProductsService } from 'src/app/features/shared/data-access/services/products.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  id: string = '1';
  product: Product = this.productsService.product;
  availableProducts: number[] = [];
  selectedProducts: number = 0;

  constructor (private productsService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.availableProducts = this.productsService.getNumberOfProducts();
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.productsService.getProducts().subscribe(products => {
      this.product = products.find(product => product.id === +this.id) || products[0];
    });
  }

  addToCart(product: Product): void {
    product.amount = +this.selectedProducts;
    this.productsService.addProductToCart(product);
    this.selectedProducts = 0;
    alert(`${product.name} has been added to cart`);
  }
}
