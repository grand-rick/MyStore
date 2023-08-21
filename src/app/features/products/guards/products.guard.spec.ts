import { TestBed } from '@angular/core/testing';

import { ProductsGuard } from './products.guard';

describe('ProductsGuard', () => {
  let guard: ProductsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
