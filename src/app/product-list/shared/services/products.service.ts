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
  { id: 1,
    name: 'Climbing Helmet',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 99.95,
    img: '../assets/img/helmet.jpg',
    available: true,
    totalPrice: 99.95,
    quantity: 1
  },
  { id: 2,
    name: 'Chalkbag',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 39.95,
    img: '../assets/img/chalkbag.jpg',
    available: false,
    totalPrice: 39.95,
    quantity: 1
  },
  { id: 3,
    name: 'Carabiner',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 8.95,
    img: '../assets/img/carabiner.jpg',
    available: true,
    totalPrice: 8.95,
    quantity: 1
  },
  { id: 4,
    name: 'Climbing shoes',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 99.95,
    img: '../assets/img/climbing-shoes.jpg',
    available: true,
    totalPrice: 99.95,
    quantity: 1
  },
  { id: 5,
    name: 'Ferrata bloc',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 144.90,
    img: '../assets/img/ferrata.jpg',
    available: false,
    totalPrice: 144.90,
    quantity: 1
  },
  { id: 6,
    name: 'Harness',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 129.95,
    img: '../assets/img/harness.jpg',
    available: true,
    totalPrice: 129.95,
    quantity: 1
  },
  { id: 7,
    name: 'Sling',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 4.17,
    img: '../assets/img/sling.jpg',
    available: false,
    totalPrice: 4.17,
    quantity: 1
  },
  { id: 8,
    name: 'Rope bag',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 129.95,
    img: '../assets/img/rope-bag.jpg',
    available: true,
    totalPrice: 129.95,
    quantity: 1
  },
  { id: 9,
    name: 'Yogibelt',
    description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain.',
    price: 11.95,
    img: '../assets/img/yogibelt.jpg',
    available: true,
    totalPrice: 11.95,
    quantity: 1
  },
];
