import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoResponse } from './components-base/Producto/models/producto-response';
import { ProductoResponseService } from './components-base/Producto/services/producto-response.service';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-admin';

}
