import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { CartService } from './../../cart/shared/services/cart.service';
import { ProductsService } from './../shared/services/products.service';
import { Product } from './../shared/interfaces/products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productReview: Array<any>;
  product: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductsService,  private cartService: CartService) {
    this.productReview = [
      {'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum.',
        'author': 'John',
        'date': '3/11/17'
      },
      {'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum.',
        'author': 'Danny',
        'date': '27/04/17'
      },
      {'review': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum.',
        'author': 'Mike',
        'date': '7/03/18'
      }
    ];
  }

  onAddToCart(product: Product) {
    this.cartService.addProductToCart(product);
    alert(`You have just added ${product.name} to cart.`);
  }

  ngOnInit(): void{
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
