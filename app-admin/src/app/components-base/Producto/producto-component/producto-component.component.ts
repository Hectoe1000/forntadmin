import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductoResponse } from '../models/producto-response';
import { ProductoResponseService } from '../services/producto-response.service';
import { CommonModule } from '@angular/common';
import { ProductoModalComponent } from '../modals-template/producto-modal/producto-modal.component';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-producto-component',
  standalone: true,
  imports: [ProductoComponentComponent,CommonModule,ProductoModalComponent],
  providers: [BsModalService] ,
  templateUrl: './producto-component.component.html',
  styleUrl: './producto-component.component.css'
})
export class ProductoComponentComponent implements OnInit {


  
  producto:ProductoResponse[]=[];
  modalRef?: BsModalRef;

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


openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}


}
