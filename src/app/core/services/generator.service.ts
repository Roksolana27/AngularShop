import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor() { }

  stringGenerator(n){
    let str = '';
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < n; i ++){
      str += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return str;
  }
}
