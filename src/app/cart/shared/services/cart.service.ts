import { Injectable } from '@angular/core';
import { Product } from '../../../product-list/shared/interfaces/products.interface';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
  private cartProducts: Product[] = [];
  constructor() { }

  getCartProducts() {
    return this.cartProducts.map(data => {
      data.totalPrice = data.price;
      data.quantity = 1;
      return data;
    });
  }

  addProductToCart(item: Product) {
    this.cartProducts.push(item);
  }

}
