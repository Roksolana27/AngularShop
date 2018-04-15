import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './../../products/shared/services/products.service';
import { Product } from './../../products/shared/interfaces/products.interface';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  products: any;
  constructor(private productService: ProductsService, private router: Router) { }

  onEditProduct(product: Product): void{
    const link = ['/admin/modify-product', product.id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
