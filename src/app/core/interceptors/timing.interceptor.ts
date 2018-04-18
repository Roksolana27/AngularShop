import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request interceptor
    let clonedRequest;
    let reqTime;
    let resTime;
    if (req.url.includes('products')) {
      reqTime = Date.now().toString();
      clonedRequest = req.clone({
        params: new HttpParams()
          .set('ts_interceptor', Date.now().toString())
      });
    } else {
      clonedRequest = req;
    }

    return next.handle(clonedRequest)
      .pipe(
        // response interceptor
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response
            resTime = Date.now().toString();
            console.log(event);
            console.log((resTime - reqTime)/1000);
            return event;
          }
        })
      );
  }
}
