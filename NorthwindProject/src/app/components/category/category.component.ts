import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/Models/productResponseModel';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  products: Product[] = [];
  apiUrl: string = 'https://localhost:7200/api/products/getAll';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  getProducts(): Product[] {
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
      this.products = response.data;
    });

    return this.products;
  }
}
