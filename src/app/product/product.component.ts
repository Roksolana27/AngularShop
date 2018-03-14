import { Component, OnInit } from '@angular/core';

enum Category {
  skiing,
  mountaineering,
  climbing,
  running,
  hiking,
  biking,
  camping
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() {
  }

  onBuy() {
    console.log('You are about to buy this item.');
  }

  ngOnInit() {
  }

}
