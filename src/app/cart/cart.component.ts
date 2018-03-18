import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Items } from '../product-list/goods';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Items[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCartProducts();
  }
  
}
