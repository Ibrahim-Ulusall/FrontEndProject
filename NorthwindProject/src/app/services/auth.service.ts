import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenModel } from '../Models/tokenModel';
import { Login } from '../Models/login';
import { DataModel } from '../Models/dataModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'https://localhost:7200/api/'
  constructor(private httpClient:HttpClient) { }
  
  loginService(login:Login) : Observable<DataModel<TokenModel>>{
    let newUri = this.apiUrl + 'auth/login'
    return this.httpClient.post<DataModel<TokenModel>>(newUri,login);
  }

  isAuthenticated():boolean{
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
