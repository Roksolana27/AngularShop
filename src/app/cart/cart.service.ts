import { Injectable } from '@angular/core';
import { Product } from '../product-list/shared/interfaces/products.interface';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
  private cartProducts: Product[] = [];
  constructor() { }

  getCartProducts() {
    return this.cartProducts.slice();
  }

  addProductToCart(item: Product) {
    this.cartProducts.push(item);
  }

}
