import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CartObservableService } from './shared/services/cart.observable.service';
import { OrderService } from './shared/services/order.service';
import { Product } from '../products/shared/interfaces/products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Observable<Array<Product>>;
  subtotal: any;
  private order = [];

  constructor(private cartObservableService:CartObservableService, private orderService: OrderService) { }

  getCartProducts(){
    this.cart = this.cartObservableService.getCartProducts();
  }

  removeCartProduct(product){
    this.cart = this.cartObservableService.removeProductFromCart(product);
  }

  updateCartProduct(product: Product){
    this.cartObservableService.updateCartProduct(product).subscribe(data => console.log("updated!"));
  }

  cleanCart(){
  //  how to clean cart?
  }

  createOrder(){
    // this.cartObservableService.getCartProducts().subscribe(data => {
    //   this.order.push(data);
    //   // this.orderService.createOrder(this.order).subscribe(data => console.log('Order created!'))
    // });
  }


  ngOnInit() {
    this.getCartProducts();

    // this.cartObservableService.getTotalPrice().subscribe((price) => {
    //   this.subtotal = price;
    // });

  }

}
