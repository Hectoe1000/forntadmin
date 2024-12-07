import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';
import { urlConstants } from '../../../constans-url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  constructor(
    private http:HttpClient
  ) { }


  login(request:LoginRequest):Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>(urlConstants.auth,request);
  }
}
