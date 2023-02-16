import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { CartProduct } from 'src/app/models/CartProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  availableProducts: number[] = [];
  selectedProducts: number = 0;

  constructor (private productsService: ProductsService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
}

  ngOnInit(): void {
    this.availableProducts = this.productsService.getNumberOfProducts();
  }

  // I set the current product using the ProductsService to allow sharing of data with the ProductItemDetail component
  setProduct(product: Product): void {
    this.productsService.setCurrentProduct(product);
  }

  addToCart(product: Product): void {
    const cartP: CartProduct = {
      ...product,
      totalPrice: this.selectedProducts * product.price
    }
    this.productsService.addProductToCart(cartP);
    alert(`${product.name} has been added to cart`);
  }
}
