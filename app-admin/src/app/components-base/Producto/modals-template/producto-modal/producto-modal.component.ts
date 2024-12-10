import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoResponse } from '../../models/producto-response';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoRequest } from '../../models/producto-request';
import { ProductoResponseService } from '../../services/producto-response.service';
import { AccionMantConst } from '../../../constans/accionConstanst';
import { CommonModule } from '@angular/common';
import { CloudService } from '../../../cloudynary/cloud.service';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-producto-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxDropzoneModule],
  templateUrl: './producto-modal.component.html',
  styleUrls: ['./producto-modal.component.css']
})
export class ProductoModalComponent implements OnInit {
  
  // Declaración de entradas de variables
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
    private _cloudinaryService: CloudService
  ) {
    // Inicializando el formulario reactivo
    this.moduleForm = this.fb.group({
      idProducto: [{ value: 0, disabled: true }, [Validators.required]],
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      precio: [null, [Validators.required]],
      imagenUrl: [null, [Validators.required]],  // Campo donde almacenamos la URL de la imagen
      idCategoria: [null, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.moduleForm.patchValue(this.producto);
  }

  guardar() {
    switch (this.accion) {
      case AccionMantConst.crear:
         
        this.crearRegistro();
          
        break;
      case AccionMantConst.editar:
        this.editarRegistro();
        break;
      case AccionMantConst.eliminar:
        // Lógica para eliminar
        break;
    }
  }


  editarRegistro() {
   
    this._productoService.update(this.ProductoEnvio).subscribe({
      next: (data: ProductoResponse) => {
            
        console.log("Producto a enviar:", this.ProductoEnvio);

        alert("Actualizado correctamente");
      },
      error: (err) => {
        console.error("Error al actualizar el producto:", err);
        if (err.status === 500) {
          console.log("Producto a enviar:", this.ProductoEnvio);
          alert("Error interno del servidor.");
        } else if (err.status === 400) {
          alert("Solicitud inválida. Revisa los datos.");
        } else {
          alert("Ocurrió un error inesperado.");
        }
      },
      complete: () => {
        this.cerrarModal(true);
      }
    });
  }

  cerrarModal(res: boolean) {
    this.closeModalEmmit.emit(res);
  }

  crearRegistro() {
    this.ProductoEnvio = this.moduleForm.getRawValue();
    
    this._productoService.create(this.ProductoEnvio).subscribe({
      next: (data: ProductoResponse) => {
       
        alert("Creado correctamente");
        
      },
      error: () => {
        alert("Ocurrió un error");
      },
      complete: () => {
        this.cerrarModal(true);
      }
    });
  }

  // Servicio para subir la imagen a Cloudinary
  files: File[] = [];

  
  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.subir();
}
  

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  subir() {
    if (this.files.length === 0) return false;  // Verifica si hay archivos para subir
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'image_upload');
    data.append('cloud_name', 'dif6hsyhq');
  
    this._cloudinaryService.uploading(data).subscribe({
      next: (response: any) => {
        const imageUrl = response.secure_url; // URL de la imagen subida
        this.moduleForm.get('imagenUrl')?.setValue(imageUrl); // Actualiza el formulario con la URL
      alert('Imagen cargada')
        const mostrar = document.querySelector('#imagen') as HTMLImageElement;
        mostrar.src = imageUrl;
      },
      error: (e: any) => {
        console.log(e); // Ver error detallado si ocurre
        alert('Error al subir la imagen');
      }
    });
  
    return true;
  }
   







}
