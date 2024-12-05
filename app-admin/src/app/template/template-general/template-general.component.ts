import { Component } from '@angular/core';
import { TemplateHeaderComponent } from '../template-header/template-header.component';
import { TemplateFooterComponent } from '../template-footer/template-footer.component';
import { TemplateSidebarComponent } from '../template-sidebar/template-sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-general',
  standalone: true,
  imports: [TemplateHeaderComponent,TemplateFooterComponent,TemplateSidebarComponent,RouterOutlet],
  templateUrl: './template-general.component.html',
  styleUrl: './template-general.component.css'
})
export class TemplateGeneralComponent {

}
