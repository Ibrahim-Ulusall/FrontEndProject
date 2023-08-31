import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResposeModel';
import { Product } from '../Models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  apiUrl: string = 'https://localhost:7200/api';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  getProductsService(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + '/Products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  
  
  getProductsByCategoryIdService(categoryId:number) : Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "/products/getbyid?id=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
