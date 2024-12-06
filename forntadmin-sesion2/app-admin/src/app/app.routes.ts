import { Routes } from '@angular/router';

export const routes: Routes = [


{
    path:'',
    loadChildren:()=>import('./template/template.module').then(m=>m.TemplateModule)
}

];
