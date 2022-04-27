// inventario

const productos = [
    {
        id: item1,
        nombre: "Taza serie 001",
        tipo: "buzo",
        desc: "Taza de cerámica realizada a mano en torno alfarero esmaltada jaspeada.",
        precio: 500,
        cantidad:1
    },

    {
        id: item2,
        nombre: "Jarra serie 001",
        tipo: "remera",
        desc: "Mini jarra de cerámica realizada a mano en torno alfarero esmaltada color blanco.",
        precio: 500,
        cantidad:1
    }
]

// abrir carrito

const abrirCarrito = document.getElementById('carrito');
const modalContenedor = document.querySelector('.modal-contenedor');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
})

//cerrar carrito

const cerrarCarrito = document.querySelector('.close');  
cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active');
})


//agregar item al carrito

const botonAgregarAlCarrito = document.getElementById("agregar1");
botonAgregarAlCarrito.onclick = () => { alert ("Agregaste este producto al carrito")};


// detalle del carrito

let carrito = []; 

const detalleCarrito = document.querySelector('.modal-content'); // contenido del carrito

