import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateGeneralComponent } from './template-general/template-general.component';

const routes: Routes = [

  {
    path:'',component:TemplateGeneralComponent,
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
