import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Product } from '../../../product-list/shared/interfaces/products.interface';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class CartService {
  private cartProducts: Product[] = [];
  private count: number = 0;

  constructor() { }

  cartTotal = new BehaviorSubject<number>(this.count);

  getCartProducts() {
    this.updateTotalPrice();
    return this.cartProducts;
  }

  addProductToCart(item: Product) {
    if(this.cartProducts.includes(item)){
      item.quantity++;
      this.updateCartProduct(item);
    } else{
      this.cartProducts.push(item);
    }
  }

  removeProductFromCart(index) {
    this.cartProducts.splice(index, 1);
  }

  updateCartProduct(item: Product) {
    const i = this.cartProducts.findIndex(data => data.id === item.id );
    if (i > -1) {
      this.cartProducts.splice(i, 1, item);
    }
    this.updateTotalPrice();

  }

  updateTotalPrice(){
    this.count = 0;
    if(this.cartProducts.length > 0){
      this.cartProducts.forEach((item) => {
        this.count = Math.round((item.totalPrice + this.count) * 100 ) / 100;
      });
    }
    this.cartTotal.next(this.count);
  }

  // getTotalPrice() : Observable<number> {
  //   return this.cartTotal.asObservable();
  // }

  cleanCart(){
    this.cartProducts.length = 0;
    this.updateTotalPrice();
  }


}
