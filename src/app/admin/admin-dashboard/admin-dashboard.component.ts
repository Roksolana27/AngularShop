import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsPromiseService } from './../../products/shared/services/products.promise.service';
import { Product } from './../../products/shared/interfaces/products.interface';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private productsPromiseService: ProductsPromiseService, private router: Router) { }

  onEditProduct(product: Product): void{
    const link = ['/admin/modify-product', product.id];
    this.router.navigate(link);
  }

  onDeleteProduct(product: Product){
    this.productsPromiseService.deleteProduct(product)
      .then(() => (this.products = this.products.filter(item => item.id !== product.id)))
      .catch(err => console.log(err))
  }

  private async getProducts() {
    this.products = await this.productsPromiseService.getProducts();
  }

  ngOnInit() {
    this.getProducts().catch(err => console.log(err));

  }
}
