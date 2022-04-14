// agregar items al carrito

import { productos } from "./productos";

let carritoDeCompras = [];

export const carritoIndex = (productoId) => {

    const contenedorCarrito = document.getElementById('carrito-contenedor');

    const renderProductosCarrito = () => {
        let producto = productos.find( producto => producto.id == productoId );
        carritoDeCompras.push(producto);

       producto.cantidad = 1;

       let div = document.createElement('div');
       div.classList.add('productoEnCarrito');
       div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button id="eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
       `;
       contenedorCarrito.appendChild(div);

    }

    renderProductosCarrito();
}