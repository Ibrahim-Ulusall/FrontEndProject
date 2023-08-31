import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  products:Product[] = [];

  constructor(private productService:ProductService){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts() : Product[] {
    this.productService.getProductsService().subscribe((response) => {
      this.products = response.data;
    });
    return this.products;
  }
}
