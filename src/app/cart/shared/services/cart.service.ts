import { Injectable } from '@angular/core';
import { Product } from '../../../product-list/shared/interfaces/products.interface';

@Injectable()
export class CartService {
  private cartProducts: Product[] = [];
  constructor() { }

  getCartProducts() {
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
  }

  cleanCart(){
    this.cartProducts.length = 0;
  }

}
