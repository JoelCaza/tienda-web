import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tienda } from '../../servicios/tienda';
import { TarjetaProduct } from '../../componentes/tarjeta-product/tarjeta-product';

@Component({
  imports: [RouterLink, TarjetaProduct],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  protected tienda = inject(Tienda);
}
