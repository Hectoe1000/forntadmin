import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioResponse } from '../models/usuario.models';
import { urlConstants } from '../../../constans-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(

    private _http:HttpClient  ) {

     }

     get():Observable<UsuarioResponse[]>{
      return this._http.get<UsuarioResponse[]>(urlConstants.usuario);
    }

    }
