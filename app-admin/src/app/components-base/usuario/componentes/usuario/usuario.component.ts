import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioResponse } from '../../models/usuario.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [UsuarioComponent,CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

 usuario: UsuarioResponse[]=[];

  constructor(
    private _usuarioServices:UsuarioService){
    
  }
  ngOnInit(): void {
   this.listarCargos();
  }





  listarCargos()
  {
    this._usuarioServices.get().subscribe({

      next: (data: UsuarioResponse[]) => {
        this.usuario = data;
       
        console.log(this.usuario)
      },
      error: (err) => {
        console.log("error ", err);
      },
      complete: () => {
        //hare algo
      },

    });

}

}



