import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponentComponent } from './Producto/producto-component/producto-component.component';
import path from 'path';
import { UsuarioComponent } from './usuario/componentes/usuario/usuario.component';

const routes: Routes = [

  // {
  //   path:'',component:ProductoComponentComponent

  // },
  // {
  //   path:'usuario',component:UsuarioComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]

})
export class ComponentsBaseRoutingModule { }
