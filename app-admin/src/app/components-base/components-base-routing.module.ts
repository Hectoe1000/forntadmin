import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponentComponent } from './Producto/producto-component/producto-component.component';

const routes: Routes = [

  {
    path:'',component:ProductoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]

})
export class ComponentsBaseRoutingModule { }
