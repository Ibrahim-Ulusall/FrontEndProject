import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { ListResponseModel } from '../Models/listResposeModel';
import { DataModel } from '../Models/dataModel';
import { Claim } from '../Models/claim';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit {

  apiUrl:string = 'https://localhost:7200/api/Users/';
  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
      
  }

  addUserService(user:User) : Observable<DataModel<User>>{
    return this.httpClient.post<DataModel<User>>(this.apiUrl + 'add',user);
  }

  deleteUserService(user:User) : Observable<DataModel<User>>{
    return this.httpClient.post<DataModel<User>>(this.apiUrl + 'delete',user);
  }

  updateUserService(user:User) : Observable<DataModel<User>>{
    return this.httpClient.post<DataModel<User>>(this.apiUrl + 'update',user);
  }

  getUserService(userId:number): Observable<DataModel<User>>{
    return this.httpClient.get<DataModel<User>>(this.apiUrl + 'getby-id?id='+userId);
  }

  getUsersService() : Observable<ListResponseModel<User>>{
    return this.httpClient.get<ListResponseModel<User>>(this.apiUrl + 'get-all');
  }

  getUserClaimsService(user:User) : Observable<ListResponseModel<Claim>>{
    
    return this.httpClient.post<ListResponseModel<Claim>>(this.apiUrl + 'claims',user);
  }

}
