import { Injectable } from '@angular/core';
import { Items } from '../models/goods';

@Injectable()
export class ProductsService {

  constructor() { }

  getAllGoods() {
    return Promise.resolve(Goods);
  }

}

const Goods: Items[] = [
  { name: 'Climbing Helmet', description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. ', price: 99.95 },
  { name: 'Climbing Helmet', description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. ', price: 99.95 },
  { name: 'Climbing Helmet', description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. ', price: 99.95 },
  { name: 'Climbing Helmet', description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. ', price: 99.95 },
  { name: 'Climbing Helmet', description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. ', price: 99.95 },
  { name: 'Climbing Helmet', description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. ', price: 99.95 },
  { name: 'Climbing Helmet', description: 'Petzl is the ideal lightweight climbing helmet for sport climbing and other activities on the mountain. ', price: 99.95 }
];
