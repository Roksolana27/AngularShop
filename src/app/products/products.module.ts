import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsService} from './shared/services/products.service';
import { ProductsPromiseService} from './shared/services/products.promise.service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterPipe} from './shared/pipes/filter.pipe';
import { ProductReviewComponent } from './product-review/product-review.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    FilterPipe,
    ProductReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  providers: [
    ProductsService,
    ProductsPromiseService
  ]
})
export class ProductsModule { }
