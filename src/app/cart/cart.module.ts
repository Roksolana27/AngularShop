import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartObservableService } from './shared/services/cart.observable.service';
import { CartAPIProvider } from './cart.config';
import { OrderService } from './shared/services/order.service';
import { OrderAPIProvider } from './order.config';

import { CartComponent } from './cart.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderByPipe } from './shared/pipes/order-by.pipe';

@NgModule({
  declarations: [
    CartComponent,
    HighlightDirective,
    CartItemComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CartObservableService,
    CartAPIProvider,
    OrderService,
    OrderAPIProvider
  ]
})
export class CartModule { }
