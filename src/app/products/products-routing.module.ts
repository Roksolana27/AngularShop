import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductReviewComponent } from './product-review/product-review.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent
  },
  {
    path: 'product/:productID',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductReviewComponent
      }
    ]
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
