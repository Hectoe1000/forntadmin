import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductoResponse } from '../../models/producto-response';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoRequest } from '../../models/producto-request';
import { ProductoResponseService } from '../../services/producto-response.service';
import { AccionMantConst } from '../../../constans/accionConstanst';
import { CommonModule } from '@angular/common';
import { CloudService } from '../../../cloudynary/cloud.service';


@Component({
  selector: 'app-producto-modal',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './producto-modal.component.html',
  styleUrl: './producto-modal.component.css'
})
export class ProductoModalComponent {

  // declaracion de entradas de variables
  @Input() title: string = "";
  @Input() producto: ProductoResponse = new ProductoResponse();
  @Input() accion: number = 0;

  @Output() closeModalEmmit = new EventEmitter<boolean>();

  /**TODO: DECLARANDO VARIABLES INTERNAS */
  imageUrls: string[] = [];
  moduleForm: FormGroup;
  ProductoEnvio: ProductoRequest = new ProductoRequest();
  /**TODO: DECLARANDO EL CONSTRUCTOR */

  constructor(
    private fb: FormBuilder,
    private _productoService: ProductoResponseService,
    private _cloudinaryService:CloudService
  ) {
    //nuestro formulario cargo request
    this.moduleForm = this.fb.group({
      idProducto: [{ value: 0, disabled: true }, [Validators.required]],
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      precio: [null, [Validators.required]],
      imagenUrl: [null, [Validators.required]],
      idCategoria: [null, [Validators.required]],
    });
  }
 
  guardar() {
debugger

    switch (this.accion) {
      case AccionMantConst.crear:
        this.crearRegistro();
        break;
      case AccionMantConst.editar:
        this.editarRegistro();
        break;
      // inactivar
      case AccionMantConst.eliminar:
        // eliminar registro
        break;
    }


  }

  editarRegistro()
  {
    this._productoService.update(this.ProductoEnvio).subscribe({
      next:(data:ProductoResponse)=>{
        alert("actualizado de forma correcta");
      },
      error:()=>{
        alert("Ocurrio un erro");
      },
      complete:()=>{
        this.cerrarModal(true);
      }
    });
  }



  
  cerrarModal(res: boolean) {
    //true ==> hubo modificación en base de datos ==> necesito volver a cargar la lista
    //false ==> NO hubo modificación en base de datos ==> NOOOOOO necesito volver a cargar la lista
    this.closeModalEmmit.emit(res);
}


crearRegistro()
  {
    debugger;
    this.ProductoEnvio = this.moduleForm.getRawValue()

    this._productoService.create(this.ProductoEnvio).subscribe({
      next:(data:ProductoResponse)=>{
        alert("creado de forma correcta");
      },
      error:()=>{
        alert("Ocurrio un erro");
      },
      complete:()=>{
        this.cerrarModal(true);
      }
    });
  }


// servicio cloud

  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  
  subir(){
    if(this.files.length===0) return false
    const file_data=this.files[0];
    const data =new FormData();
    data.append('file' ,file_data);
    data.append('upload_preset','image_upload');
    data.append('cloud_name','dif6hsyhq')
    
    
    const mostrar = document.querySelector('#imagen') as HTMLImageElement;

    
    this._cloudinaryService.uploading(data).subscribe(
      {
        next: (response: any) => {
          console.log(response); // Aquí ves toda la respuesta de Cloudinary
    
          const imageUrl = response.secure_url; // Extraer el enlace de la imagen subida
          console.log('URL de la imagen subida:', imageUrl);
          
          // Realizar algo con el enlace (por ejemplo, guardarlo en tu base de datos)
          alert('Imagen subida correctamente');
          
          mostrar.src=imageUrl
    
        },
        error: (e: any) => {
          console.log(e);
          alert('Error al subir la imagen');
        },

    })

   
    return true;
  }


 



}
