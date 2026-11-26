import { Injectable, signal,computed } from '@angular/core';
import { Producto } from '../modelos/producto';
import { PRODUCTOS } from '../datos/productos';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}


@Injectable({ providedIn: 'root' })
export class Tienda {
     readonly productos = signal<Producto[]>(PRODUCTOS);

  readonly items = signal<ItemCarrito[]>([]);

  // computed: se recalcula solo cuando cambia items()
  readonly cantidad = computed(() => this.items().reduce((suma, i) => suma + i.cantidad, 0));
  readonly total = computed(() =>
    this.items().reduce((suma, i) => suma + i.cantidad * i.producto.precio, 0));

  buscar(id: number) {
    return this.productos().find(p => p.id === id);
  }

  agregar(p: Producto) {
    this.items.update(lista => {
      const item = lista.find(i => i.producto.id === p.id);
      if (!item) return [...lista, { producto: p, cantidad: 1 }];
      if (item.cantidad >= p.stock) return lista;          // no más que el stock
      return lista.map(i => (i === item ? { ...i, cantidad: i.cantidad + 1 } : i));
    });
  }

  quitar(id: number) {
    this.items.update(lista => lista.filter(i => i.producto.id !== id));
  }


}
