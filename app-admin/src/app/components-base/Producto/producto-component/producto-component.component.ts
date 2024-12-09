import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductoResponse } from '../models/producto-response';
import { ProductoResponseService } from '../services/producto-response.service';
import { CommonModule } from '@angular/common';
import { ProductoModalComponent } from '../modals-template/producto-modal/producto-modal.component';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccionMantConst } from '../../constans/accionConstanst';
@Component({
  selector: 'app-producto-component',
  standalone: true,
  imports: [ProductoComponentComponent,CommonModule,ProductoModalComponent],
  providers: [BsModalService] ,
  templateUrl: './producto-component.component.html',
  styleUrl: './producto-component.component.css'
})
export class ProductoComponentComponent implements OnInit {


  // Inicializa las variables 

  productos:ProductoResponse[]=[];
  
  productoSelected: ProductoResponse = new ProductoResponse();
  modalRef?: BsModalRef;
  titleModal: string = "";
  accionModal: number = 0;

  constructor(
    private _productoServices:ProductoResponseService,
    private modalService: BsModalService
  ){

  }
  ngOnInit(): void {
    this.listarCargos();
  }



  listarCargos()
  {
    this._productoServices.get().subscribe({

      next: (data: ProductoResponse[]) => {
        this.productos = data;
       
        console.log(this.productos)
      },
      error: (err) => {
        console.log("error ", err);
      },
      complete: () => {
        //hare algo
      },

    });

}

// Personalizar el modal 

// abre el modal
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}





crearProducto(template: TemplateRef<any>) {
  this.productoSelected = new ProductoResponse();
  this.titleModal = "NUEVO producto";
  this.accionModal = AccionMantConst.crear;
  this.openModal(template);
}


editarProducto(template: TemplateRef<any>, product: ProductoResponse) {
  this.productoSelected = product;
  this.titleModal = "EDITAR CARGO";
  this.accionModal = AccionMantConst.editar;
  this.openModal(template);
}



getCloseModalEmmit(res:boolean)
{
  this.modalRef?.hide();
  if(res)
  {
    this.listarCargos();
  }

}



eliminarRegistro(id: number) {
  let result = confirm("¿Está seguro de eliminar el registro?");

  if (result) {
    this._productoServices.delete(id).subscribe({
      next: (data: number) => {
        alert("Registro eliminado de forma correcta");
      },
      error: () => { },
      complete: () => {
        this.listarCargos();
      }
    });
  }

}

}
