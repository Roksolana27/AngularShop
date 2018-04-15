import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule, AdminRouterComponents } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminRouterComponents,
    AdminDashboardComponent,
    ModifyProductComponent,
    ManageOrdersComponent
  ]
})
export class AdminModule { }
