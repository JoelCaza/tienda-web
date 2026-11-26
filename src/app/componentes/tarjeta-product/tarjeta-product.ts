import { Component, input, output } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, CurrencyPipe],
  selector: 'app-tarjeta-product',
  styleUrl: './tarjeta-product.css',
  templateUrl: './tarjeta-product.html',
})
export class TarjetaProduct {
  producto = input.required<Producto>();
  agregar = output<Producto>();

}
