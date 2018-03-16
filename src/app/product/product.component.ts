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
  img: string;
  productReview: Array<any>;

  constructor() {
    this.name = 'Helmet';
    this.description = 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. Its sturdy hybrid construction provides maximum protection against both impacts from above and diagonal impacts. To provide ideal comfort, the helmet is equipped with large ventilation openings to keep your head cool. Should it get dark, the helmet is compatible with headlamps. Two clips on the front of the helmet and an elastic strap on the back of the helmet provide perfect support for the lighting.';
    this.price = 99.95;
    this.isAvailable = true;
    this.img = '../assets/img/helmet.jpg';
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

  ngOnInit() {
  }

}
