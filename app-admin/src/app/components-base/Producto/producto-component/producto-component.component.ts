import { Component, OnInit } from '@angular/core';
import { ProductoResponse } from '../models/producto-response';
import { ProductoResponseService } from '../services/producto-response.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-producto-component',
  standalone: true,
  imports: [ProductoComponentComponent,CommonModule],
  templateUrl: './producto-component.component.html',
  styleUrl: './producto-component.component.css'
})
export class ProductoComponentComponent implements OnInit {


  
  producto:ProductoResponse[]=[];

  constructor(
    private _productoServices:ProductoResponseService
  ){

  }
  ngOnInit(): void {
    this.listarCargos();
  }



  listarCargos()
  {
    this._productoServices.get().subscribe({

      next: (data: ProductoResponse[]) => {
        this.producto = data;
       
        console.log(this.producto)
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
