import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { productsGuard } from './products.guard';

describe('productsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => productsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
