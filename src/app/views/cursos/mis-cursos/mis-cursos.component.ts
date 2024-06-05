import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [ CardBodyComponent, CardComponent, RowComponent, ColComponent, ButtonDirective],
  templateUrl: './mis-cursos.component.html',
  styleUrl: './mis-cursos.component.scss'
})
export class MisCursosComponent {

  private router = inject(Router)

  goToListaContenido(){
    this.router.navigate(['/lista-contenido']);
  }

}
