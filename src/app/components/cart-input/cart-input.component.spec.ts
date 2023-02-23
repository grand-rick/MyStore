import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartInputComponent } from './cart-input.component';

describe('CartInputComponent', () => {
  let component: CartInputComponent;
  let fixture: ComponentFixture<CartInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
