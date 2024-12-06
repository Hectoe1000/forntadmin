import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateGeneralComponent } from './template-general/template-general.component';
import { LoginComponent } from '../components-base/login/componentes/login/login.component';

const routes: Routes = [

  {
    path:'',component:LoginComponent
  },

  {

    path:'dashboard',component:TemplateGeneralComponent,
    children:[
      {
        path:'producto',loadChildren:()=>import('../components-base/components-base.module').then(m=>m.ComponentsBaseModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
