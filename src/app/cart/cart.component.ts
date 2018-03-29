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
  subtotal: any;

  constructor(private cartService: CartService) { }

  getCartProducts(){
    this.cart = this.cartService.getCartProducts();
  }

  removeCartProduct(index){
    this.cartService.removeProductFromCart(index);
    this.getCartProducts();
  }

  updateCartProduct(item: Product){
    this.cartService.updateCartProduct(item);
  }

  cleanCart(){
    this.cartService.cleanCart();
  }


  ngOnInit() {
    this.getCartProducts();
  }

}
