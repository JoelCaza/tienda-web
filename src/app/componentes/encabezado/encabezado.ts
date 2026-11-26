import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tienda } from '../../servicios/tienda';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink, RouterLinkActive],
  selector: 'app-encabezado',
  styleUrl: './encabezado.css',
  templateUrl: './encabezado.html',
})
export class Encabezado {
  protected tienda = inject(Tienda);
}
