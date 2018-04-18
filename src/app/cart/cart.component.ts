import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CartObservableService } from './shared/services/cart.observable.service';
import { Product } from '../products/shared/interfaces/products.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Observable<Array<Product>>;
  // subtotal = this.cartObservableService.cartTotal;
  subtotal: any;
  constructor(private cartObservableService:CartObservableService) { }

  getCartProducts(){
    this.cart = this.cartObservableService.getCartProducts();
  }

  removeCartProduct(product){
    this.cart = this.cartObservableService.removeProductFromCart(product);
  }

  updateCartProduct(product: Product){
    // this.cartService.updateCartProduct(product);
    this.cartObservableService.updateCartProduct(product).subscribe(data => console.log("updated!"));
  }

  cleanCart(){
    // this.cartObservableService.cleanCart();
  }


  ngOnInit() {
    this.getCartProducts();
    this.cartObservableService.cartTotal.subscribe(data => console.log(data));

    this.cartObservableService.getTotalPrice().subscribe((price) => {
      this.subtotal = price;
    })

  }

}
