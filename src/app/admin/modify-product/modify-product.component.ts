import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from './../../products/shared/services/products.service';
import { Product } from './../../products/shared/interfaces/products.interface';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  product: Product;
  @ViewChild('f') productForm: NgForm;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  saveProduct(){
    console.log(this.productForm.value);
    this.productService.updateProduct(this.productForm.value);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          return params.get('productID')
            ? this.productService.getProduct(+params.get('productID'))
            : Promise.resolve(null);
        })
      ).subscribe(
      product => this.product = {...product},
      err => console.log(err)
    );
  }

}
