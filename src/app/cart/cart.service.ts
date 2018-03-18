import { Injectable } from '@angular/core';
import { Items } from '../product-list/goods';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
  private cartProducts: Items[] = [];
  constructor() { }

  getCartProducts(){
    return this.cartProducts.slice();
  }

  addProductToCart(item: Items){
    this.cartProducts.push(item);
  }

}
