import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsService} from './shared/services/products.service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list.component';
import { FilterPipe} from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
