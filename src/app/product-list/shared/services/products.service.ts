import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts() {
    return Promise.resolve(Products);
  }
}

const Products: Product[] = [
  { name: 'Climbing Helmet',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 99.95,
    img: '../assets/img/helmet.jpg',
    available: true
  },
  { name: 'Chalkbag',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 39.95,
    img: '../assets/img/chalkbag.jpg',
    available: false
  },
  { name: 'Carabiner',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 8.95,
    img: '../assets/img/carabiner.jpg',
    available: true
  },
  { name: 'Climbing shoes',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 99.95,
    img: '../assets/img/climbing-shoes.jpg',
    available: true
  },
  { name: 'Ferrata bloc',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 144.90,
    img: '../assets/img/ferrata.jpg',
    available: false
  },
  { name: 'Harness',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 129.95,
    img: '../assets/img/harness.jpg',
    available: true
  },
  { name: 'Sling',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 4.17,
    img: '../assets/img/sling.jpg',
    available: false
  },
  { name: 'Rope bag',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 129.95,
    img: '../assets/img/rope-bag.jpg',
    available: true
  },
  { name: 'Yogibelt',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 11.95,
    img: '../assets/img/yogibelt.jpg',
    available: true
  },
];
