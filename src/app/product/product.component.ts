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
    this.name = 'Helmet';
    this.description = 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. ';
    this.price = 99.95;
    this.isAvailable = true;
  }

  onBuy() {
    console.log('You are about to buy this item.');
  }

  ngOnInit() {
  }

}
