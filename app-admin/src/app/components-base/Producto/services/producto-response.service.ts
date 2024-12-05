import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoResponse } from '../models/producto-response';
import { url } from '../../../constans-url';

@Injectable({
  providedIn: 'root'
})
export class ProductoResponseService {

  constructor(
   protected  _http:HttpClient,
  ) { 

  }



get():Observable<ProductoResponse[]>{
  return this._http.get<ProductoResponse[]>(url);
}




}
