import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoResponse } from '../models/producto-response';
import { urlConstants } from '../../../constans-url';
import { ProductoRequest } from '../models/producto-request';


@Injectable({
  providedIn: 'root'
})
export class ProductoResponseService {

  constructor(
   protected  _http:HttpClient,
  ) { 

  }


// ENCARGA DE TRAER LOS DATOS DE PRODUCTO
get():Observable<ProductoResponse[]>{
  return this._http.get<ProductoResponse[]>(urlConstants.producto);
}

// ENCARGA DE CREAR UN NUEVO ELEMENTO
create(request: ProductoRequest): Observable<ProductoResponse> {
   
  return this._http.post<ProductoResponse>(urlConstants.producto, request);
  }

  update(request: ProductoRequest): Observable<ProductoResponse> {
  return this._http.put<ProductoResponse>(urlConstants.producto, request);
  }
  
  delete(id: number): Observable<number> {
  // return this._http.delete<number>(urlConstants.cargo + id.toString());
  return this._http.delete<number>(`${urlConstants.producto}${id}`);
  }


}
