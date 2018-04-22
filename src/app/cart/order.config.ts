import { InjectionToken } from '@angular/core';

const orderBaseUrl = 'http://localhost:3000/order';
export const OrderAPI = new InjectionToken<string>('OrderAPI');

export const OrderAPIProvider = {
  provide: OrderAPI,
  useValue: orderBaseUrl
};
