import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seccion-cuenta',
  templateUrl: './seccion-cuenta.component.html',
  styleUrls: ['./seccion-cuenta.component.scss'],
})
export class SeccionCuentaComponent {
  @Input() account!: string;
  @Input() city!: string;
  @Input() money!: number;
  constructor() {}
}
