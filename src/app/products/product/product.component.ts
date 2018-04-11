import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';
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

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductsService) {
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

  onBuy() {
    console.log('You are about to buy this item.');
  }

  onAddReview(){
    const link = ['/add-review'];
    this.router.navigate(link);
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
