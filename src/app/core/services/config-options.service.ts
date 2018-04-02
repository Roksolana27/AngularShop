import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {
  CONFIG = {
    id: '1',
    login: 'roksi',
    email: 'awesome@email.com',
    password: '11111'
  };

  constructor() { }

}
