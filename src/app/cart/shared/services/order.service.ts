import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../../../products/shared/interfaces/products.interface';
import { OrderAPI } from './../../order.config';

@Injectable()
export class OrderService {

  constructor(
    private http: HttpClient,
    @Inject(OrderAPI) private orderUrl: string
  ) {}
//
//   // getOrders(): Observable<Array<any>> {
//   //   return this.http.get(this.orderUrl)
//   //     .pipe(
//   //       map( this.handleData ),
//   //       catchError( this.handleError )
//   //     );
//   // }
//
  createOrder(product: Product[]): Observable<Product[]> {
    const url = this.orderUrl,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    console.log(body);

    return this.http
      .post(url, body, options)
      .pipe(
        map( this.handleData ),
        catchError( this.handleError )
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
