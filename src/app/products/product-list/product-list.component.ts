import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { CartService } from './../../cart/shared/services/cart.service';
import { ProductsService } from './../shared/services/products.service';
import { Product } from './../shared/interfaces/products.interface';

registerLocaleData(localeFr);

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products: Product[] = [];
  products: any;
  constructor( private router: Router, private productService: ProductsService, private cartService: CartService) { }

  onAddToCart(item) {
    this.cartService.addProductToCart(item);
    alert(`You have just added ${item.name} to cart.`);
  }

  previewProduct(product: Product): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }

  ngOnInit() {
    // this.productService.getProducts()
    //   .then((products:Product[]) => this.products = products);
    this.products = this.productService.getProducts();
    }
}





