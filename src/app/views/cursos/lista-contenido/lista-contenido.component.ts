import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective,
  ButtonModule
} from '@coreui/angular';

@Component({
  selector: 'app-lista-contenido',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    TemplateIdDirective,
    AccordionButtonDirective,
    ButtonModule
  ],
  templateUrl: './lista-contenido.component.html',
  styleUrl: './lista-contenido.component.scss'
})
export class ListaContenidoComponent {

  private router = inject(Router)

  goToVerVideo(){
    this.router.navigate(['/ver-video']);
  }

}
