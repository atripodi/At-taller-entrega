// abrir y cerrar carrito

const modalContenedor = document.querySelector('.modal-contenedor'); // div contenedor
const abrirCarrito = document.getElementById('carrito'); //boton del header con el carrito
const cerrarCarrito = document.querySelector('.close'); //boton del modal 
const modalCarrito = document.querySelector('.modal-content'); // contenido del carrito

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
})

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
})




