import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/services/cart.service';
import { Product } from './../product-list/shared/interfaces/products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  getCartProducts(){
    this.cart = this.cartService.getCartProducts();
  }

  ngOnInit() {
    this.getCartProducts();
  }

}
