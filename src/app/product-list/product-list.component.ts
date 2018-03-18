import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { CartService } from '../cart/cart.service';
import { Items } from './goods';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  goods: Items[] = [];

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.productService.getAllGoods()
      .then(goods => this.goods = goods);
  }

  onAddToCart(item){
    this.cartService.addProductToCart(item);
    alert(`You have just added ${item.name} to cart.`);
  }
}


