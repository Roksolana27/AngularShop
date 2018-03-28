import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  getCartProducts(){
    this.cart = this.cartService.getCartProducts();
  }

  ngOnInit() {
    this.getCartProducts();
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/services/cart.service';
import { Product } from '../product-list/shared/interfaces/products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  color: string;

  constructor(private cartService: CartService) { }

  increment(item) {
    item.totalPrice =  Math.round((item.totalPrice + item.price) * 100 ) / 100;
    item.quantity++;
  }

  decrement(item) {
    if (item.totalPrice > 0) {
      item.totalPrice = Math.round((item.totalPrice - item.price) * 100) / 100;
      item.quantity--;
    }
  }

  remove(index) {
    this.cartService.removeProductFromCart(index);
    this.getCartProducts();
  }

  getCartProducts(){
    this.cart = this.cartService.getCartProducts();
  }

  ngOnInit() {
    this.getCartProducts();
  }

}
