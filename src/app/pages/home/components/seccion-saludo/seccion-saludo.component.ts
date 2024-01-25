import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-saludo',
  templateUrl: './seccion-saludo.component.html',
  styleUrls: ['./seccion-saludo.component.scss'],
})
export class SeccionSaludoComponent {
  @Input() date!: Date;
  @Input() hour!: number;
  @Input() username!: string;
  constructor() {}
}
