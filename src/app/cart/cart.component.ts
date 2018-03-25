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

  constructor(private cartService: CartService) { }

  addOne(item) {
    item.totalPrice =  Math.round((item.totalPrice + item.price) * 100 ) / 100;
    item.quantity++;
  }

  removeOne(item) {
    if (item.totalPrice > 0) {
      item.totalPrice = Math.round((item.totalPrice - item.price) * 100) / 100;
      item.quantity--;
    }
  }

  ngOnInit() {
    this.cart = this.cartService.getCartProducts();
  }

}
