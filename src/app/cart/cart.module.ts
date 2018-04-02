import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './shared/services/cart.service';
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
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
