import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-detalle',
  templateUrl: './seccion-detalle.component.html',
  styleUrls: ['./seccion-detalle.component.scss'],
})
export class SeccionDetalleComponent {
  @Input() title!: string;
  @Input() body!: string;
  constructor() {}
}
