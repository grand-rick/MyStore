import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Product } from '../../shared/data-access/models/Product';
import { inject } from '@angular/core';
import { ProductsService } from '../../shared/data-access/services/products.service';

export const productsGuard: ResolveFn<Product[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
  const productService = inject(ProductsService);

  return productService.getProducts();
};
