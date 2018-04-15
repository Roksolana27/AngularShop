import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AuthGuard } from './../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'orders', component: ManageOrdersComponent },
          { path: 'modify-product/:productID', component: ModifyProductComponent },
          { path: 'modify-product', component: ModifyProductComponent }
        ]
      }
    ]
  }
];

export const AdminRouterComponents = [
  AdminComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
