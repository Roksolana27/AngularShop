import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './../../product-list/shared/interfaces/products.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  color: string;
  @Input()
  cart: Product[] = [];

  @Output()
  cartItem = new EventEmitter<Product>();

  constructor() { }

  removeCartProduct(i) {
    this.cartItem.emit(i);
  }

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

  ngOnInit() {

  }

}
