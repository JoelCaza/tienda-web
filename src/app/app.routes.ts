import { Routes } from '@angular/router';
import { Catalogo } from './paginas/catalogo/catalogo';
import { DetalleProducto } from './paginas/detalle-producto/detalle-producto';
import { Carrito } from './paginas/carrito/carrito';
import { NoEncontrado } from './paginas/no-encontrado/no-encontrado';
import { Inicio } from './paginas/inicio/inicio';
import { Pagos } from './paginas/pagos/pagos';
export const routes: Routes = [
{ path: '', component: Inicio, title: 'Mi tienda' },
  { path: 'catalogo', component: Catalogo, title: 'Catálogo · Mi tienda' },
  { path: 'producto/:id', component: DetalleProducto, title: 'Producto · Mi tienda' },
  { path: 'carrito', component: Carrito, title: 'Carrito · Mi tienda' },
  {path: 'pagos', component:Pagos, title: 'Pagos · Mi tienda'},
  { path: '**', component: NoEncontrado, title: 'No encontrado' },

];
