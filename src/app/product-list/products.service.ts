import { Injectable } from '@angular/core';
import { Items } from './goods';

@Injectable()
export class ProductsService {

  constructor() { }

  getAllGoods() {
    return Promise.resolve(Goods);
  }

}

const Goods: Items[] = [
  { name: 'Climbing Helmet',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 99.95,
    img: '../assets/img/helmet.jpg'
  },
  { name: 'Chalkbag',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 39.95,
    img: '../assets/img/chalkbag.jpg'
  },
  { name: 'Carabiner',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 8.95,
    img: '../assets/img/carabiner.jpg'
  },
  { name: 'Climbing shoes',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 99.95,
    img: '../assets/img/climbing-shoes.jpg'
  },
  { name: 'Ferrata bloc',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 144.90,
    img: '../assets/img/ferrata.jpg'},
  { name: 'Harness',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 129.95,
    img: '../assets/img/harness.jpg'
  },
  { name: 'Sling',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 4.17,
    img: '../assets/img/sling.jpg'
  },
  { name: 'Rope bag',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 129.95,
    img: '../assets/img/rope-bag.jpg'
  },
  { name: 'Yogibelt',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 11.95,
    img: '../assets/img/yogibelt.jpg'
  },
];
