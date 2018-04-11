import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ProductsModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
