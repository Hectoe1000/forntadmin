import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateGeneralComponent } from './template-general/template-general.component';
import { LoginComponent } from '../components-base/login/componentes/login/login.component';
import { ProductoComponentComponent } from '../components-base/Producto/producto-component/producto-component.component';
import { UsuarioComponent } from '../components-base/usuario/componentes/usuario/usuario.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent
  },

  {

    path:'dashboard',component:TemplateGeneralComponent,
    children:[
      {
        path:'producto',component:ProductoComponentComponent
      },
      {
        path:'usuario',component:UsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
