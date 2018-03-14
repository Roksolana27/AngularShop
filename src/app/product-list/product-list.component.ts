import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/products.service';
import { Items } from '../models/goods';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  goods: Items[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllGoods()
      .then(goods => this.goods = goods);
  }
}


