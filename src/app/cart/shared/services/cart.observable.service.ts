import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { map, concatMap, catchError } from 'rxjs/operators';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { Product } from '../../../products/shared/interfaces/products.interface';
import { CartAPI } from './../../cart.config';

@Injectable()
export class CartObservableService {
  private cartProducts: Product[] = []; //TODO: get product quantity from cart
  private count: number = 0;
  private cartTotal$ = new BehaviorSubject<number>(this.count);

  constructor(
    private http: HttpClient,
    @Inject(CartAPI) private cartUrl: string
  ) {}

  get cartTotal(): BehaviorSubject<number> {
    return this.cartTotal$;
  }

  getTotalPrice() : Observable<number> {
    return this.cartTotal.asObservable();
  }

  getCartProducts(): Observable<Product[]> {
    return this.http.get(this.cartUrl)
      .pipe(
        map( this.handleData ),
        catchError( this.handleError )
      );
  }

  addProductToCart(product: Product): Observable<Product> {
    const url = this.cartUrl,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    return this.http
      .post(url, body, options)
      .pipe(
        map( this.handleData ),
        catchError( this.handleError )
      );
  }

  updateCartProduct(product: Product): Observable<Product> {
    this.updateTotalPrice();
    const url = `${this.cartUrl}/${product.id}`,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    return this.http
      .put(url, body, options)
      .pipe(
        map( this.handleData ),
        catchError(this.handleError)
      );
  }


  updateTotalPrice(){
    this.count = 0;

    if(this.cartProducts.length > 0){
      this.cartProducts.forEach((item) => {
        this.count = Math.round((item.totalPrice + this.count) * 100 ) / 100;
      });
    }
    console.log(this.cartProducts);
    this.cartTotal.next(this.count);
  }

  removeProductFromCart(product: Product): Observable<Product[]> {
    const url = `${this.cartUrl}/${product.id}`;

    return this.http.delete(url)
      .pipe(
        concatMap(() => this.getCartProducts())
      );
  }


  private handleData(response: HttpResponse<Product[] | Product>) {
    const body = response;
    return body || {};
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.error(errorMessage);
    return _throw(errorMessage);
  }
}
