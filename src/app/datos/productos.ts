import { Producto } from '../modelos/producto';

const img = (texto: string) => `https://placehold.co/400x300?text=${texto}`;

    export const PRODUCTOS: Producto[] = [
        {
            id: 1,
            nombre: 'Producto 1',
            stock: 10,
            descripcion: 'Descripción del producto 1',
            precio: 19.99,
            imagen: img('Producto 1'),
            categoria: 'Categoría A'
        },
        {
            id: 2,
            nombre: 'Producto 2',
            stock: 5,
            descripcion: 'Descripción del producto 2',
            precio: 29.99,
            imagen: img('Producto 2'),
            categoria: 'Categoría B'
        },
        {
              id: 3,
            nombre: 'Producto 3',
            stock: 0,
            descripcion: 'Descripción del producto 3',
            precio: 39.99,
            imagen: img('Producto 3'),
            categoria: 'Categoría B'
        }
    ];