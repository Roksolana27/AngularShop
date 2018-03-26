import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService} from './shared/services/products.service';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
