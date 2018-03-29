import { Injectable } from '@angular/core';
import { Product } from './../../product-list/shared/interfaces/products.interface';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public setLocalStorageProduct(products: Product): void{
    localStorage.setItem('products', JSON.stringify({products: products}));
  }

  public getProducts(){
    let localStorageItem = JSON.parse(localStorage.getItem('products'))
  }

  public addProduct(product: Product): void{
    this.setLocalStorageProduct(product);

  }

  // public removeProduct(id: number): void{
  //   let products = this.getProducts();
  //   products = products.filter( product => product.id != id );
  //   this.setLocalStorageProduct(products);
  // }

}
