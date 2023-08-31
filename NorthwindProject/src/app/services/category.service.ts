import { Injectable, OnInit } from '@angular/core';
import { ListResponseModel } from '../Models/listResposeModel';
import { Category } from '../Models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {

  apiUrl:string = 'https://localhost:7200/api'
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
      
  }

  getCategoriesService() : Observable<ListResponseModel<Category>>{
    let newPath = this.apiUrl + '/categories/getall';
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
}
