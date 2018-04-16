import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

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
  searchProduct: any;
  constructor( private router: Router, private productService: ProductsService) { }

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





