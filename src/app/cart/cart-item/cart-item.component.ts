import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../products/shared/interfaces/products.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  orderProduct: string;
  color: string;
  @Input() cart: Product;

  @Output()
  cartItem = new EventEmitter<Product>();

  @Output()
  cartItemUpdate = new EventEmitter<Product>();

  constructor() { }

  removeCartProduct(item) {
    this.cartItem.emit(item);
  }

  increment(item: Product) {
    item.totalPrice =  Math.round((item.totalPrice + item.price) * 100 ) / 100;
    item.quantity++;
    this.cartItemUpdate.emit(item);
  }

  decrement(item: Product) {
    if (item.totalPrice > 0) {
      item.totalPrice = Math.round((item.totalPrice - item.price) * 100) / 100;
      item.quantity--;
      this.cartItemUpdate.emit(item);
    }
  }

  ngOnInit() {

  }

}
