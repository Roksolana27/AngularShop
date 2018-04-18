import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { ProductsPromiseService } from './../../products/shared/services/products.promise.service';
import { Product } from './../../products/shared/interfaces/products.interface';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  product: Product;
  // @ViewChild('f') productForm: NgForm;

  constructor(private route: ActivatedRoute, private location: Location, private productsPromiseService: ProductsPromiseService) { }

  saveProduct(product: Product){
    if(product.id) {
      this.productsPromiseService.updateProduct(product)
        .then( () => this.location.back());
    }else{
      this.productsPromiseService.createProduct(product);
      this.location.back()
    }

  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.product = new Product(null, '', '', null);
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          return params.get('productID')
            ? this.productsPromiseService.getProduct(+params.get('productID'))
            : Promise.resolve(null);
        })
      )
      .subscribe(
        product => {this.product = {...product};},
        err => console.log(err)
      );
  }

}
