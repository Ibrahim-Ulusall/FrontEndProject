import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponceModel';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'https://localhost:7200/api';
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "/products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getByCategoryId(id: number) {
    let newPath = this.apiUrl + '/products/getbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
