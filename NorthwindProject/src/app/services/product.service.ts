import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { ListResponseModel } from '../Models/listResposeModel';
import { Product } from '../Models/product';
import { ResponseModel } from '../Models/responseModel';
import { DataModel } from '../Models/dataModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  apiUrl: string = 'https://localhost:7200/api';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  getProductsService(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + '/products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  
  
  getProductsByCategoryIdService(categoryId:number) : Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "/products/getbyid?id=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  addProductService(product:Product) : Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/products/add",product);
  }

  deleteProductService(product:Product) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + '/products/delete',product);
  }

  updateProductService(product:Product): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + '/products/update',product);
  }

  getProductService(productId:number) : Observable<DataModel<Product>>{
    return this.httpClient.get<DataModel<Product>>(this.apiUrl+ '/products/getbyproductid?id='+productId);
  }
}

