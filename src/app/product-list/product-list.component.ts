import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/services/products.service';
import { CartService } from '../cart/cart.service';
import { Product } from './shared/interfaces/products.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.productService.getProducts()
      .then(products => this.products = products);
    console.log(this.products);
  }

  onAddToCart(item) {
    this.cartService.addProductToCart(item);
    alert(`You have just added ${item.name} to cart.`);
  }
}


