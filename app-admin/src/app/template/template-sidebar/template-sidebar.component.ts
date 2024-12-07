import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoComponentComponent } from '../../components-base/Producto/producto-component/producto-component.component';

@Component({
  selector: 'app-template-sidebar',
  standalone: true,
  imports: [RouterLink,ProductoComponentComponent],
  templateUrl: './template-sidebar.component.html',
  styleUrl: './template-sidebar.component.css'
})
export class TemplateSidebarComponent {

}
