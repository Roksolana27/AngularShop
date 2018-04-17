import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { ProductsPromiseService } from './../shared/services/products.promise.service';
import { Product } from './../shared/interfaces/products.interface';
registerLocaleData(localeFr);

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  searchProduct: any;
  constructor( private router: Router, private productsPromiseService: ProductsPromiseService) { }

  previewProduct(product: Product): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }

  private async getProducts(){
    this.products = await this.productsPromiseService.getProducts();
  }

  ngOnInit() {
    // this.productService.getProducts()
    //   .then((products:Product[]) => this.products = products);
    // this.products = this.productService.getProducts();
    this.getProducts().catch(err => console.log(err));
    }
}





