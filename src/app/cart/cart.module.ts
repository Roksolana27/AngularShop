import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from './shared/services/cart.service';
import { CartObservableService } from './shared/services/cart.observable.service';
import { CartAPIProvider } from './cart.config';

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
    CartService,
    CartObservableService,
    CartAPIProvider
  ]
})
export class CartModule { }
