import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './shared/services/cart.service';
import { CartComponent } from './cart.component';
import { HighlightDirective } from './shared/directives/highlight.directive';

@NgModule({
  declarations: [
    CartComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    CartService
  ]
})
export class CartModule { }
