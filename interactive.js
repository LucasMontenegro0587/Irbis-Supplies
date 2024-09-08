const carritoFisico = document.getElementById('carrito');
const misProductos = document.getElementById('productos');
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const carritovaciado = document.getElementById('vaciar-carrito');
const mostrarCarritoBtn = document.getElementById('show-cart');
const finalizarCompraBtn = document.getElementById('finalizar-compra');
const contactoDiv = document.getElementById('contacto');
const compraForm = document.getElementById('compra-form');
const productoIdInput = document.getElementById('producto-id');
const colorIdInput = document.getElementById('color-id');
const cantidadInput = document.getElementById('cantidad');
const mensajeCompra = document.getElementById('mensaje-compra');
const totalCarrito = document.getElementById('total-carrito');
const welcomeModal = document.getElementById('welcome-modal');

// Lista de productos
const productos = [
  { id: 1, nombre: "Rifle de francotirador Broughton M2000-D - 5 rondas", precio: 3500, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Lila"], imagen: "e-commerce/producto-uno.png" },
  { id: 2, nombre: "Pistola Glock 25 Radetec Slide c/ visor digital - 10 rondas", precio: 600, colores: ["Negro", "Agrisado", "Blanco", "Naranja", "Marrón"], imagen: "e-commerce/producto-dos.png" },
  { id: 3, nombre: "Subfusil FN P90 - 50 rondas", precio: 2000, colores: ["Negro", "Agrisado", "Blanco", "Turquesa", "Rosa"], imagen: "e-commerce/producto-tres.png" },
  { id: 4, nombre: "Kit convertor + FN Five-Seven - 20 rondas", precio: 3000, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Musgo"], imagen: "e-commerce/producto-cuatro.png" },
  { id: 5, nombre: "Carabina Corvo CAR-4 - 20 rondas", precio: 2200, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Greige"], imagen: "e-commerce/producto-cinco.png" },
  { id: 6, nombre: "Subsubil TKA Cobra - 20 rondas", precio: 2200, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Marrón"], imagen: "e-commerce/producto-seis.png" },
  { id: 7, nombre: "Subfusil SG Compact-5 - 20 rondas", precio: 2300, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Marrón"], imagen: "e-commerce/producto-siete.png" },
  { id: 8, nombre: "Rifle táctico Swordfish pentaburst - 50 rondas", precio: 1700, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Musgo"], imagen: "e-commerce/producto-ocho.png" },
  { id: 9, nombre: "Rifle de asalto TAQ-VF 7S - 30 rondas", precio: 1600, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Musgo"], imagen: "e-commerce/producto-nueve.png" },
  { id: 10, nombre: "Revolver de acción simple Corvo DS6 duales - 5 rondas", precio: 800, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Púrpura"], imagen: "e-commerce/producto-diez.png" },
  { id: 11, nombre: "Rifle de francotirador AIM 90 - 10 rondas", precio: 3200, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Oliva"], imagen: "e-commerce/producto-once.png" },
  { id: 12, nombre: "Fusil de asalto AK Surorov SV7 - 10 rondas", precio: 1400, colores: ["Negro", "Agrisado", "Dorado", "Ocre", "Marrón"], imagen: "e-commerce/producto-doce.png" },
  { id: 13, nombre: "Rifle de francotirador AK-R - 30 rondas", precio: 3000, colores: ["Negro", "Agrisado", "Dorado", "Ocre", "Marrón"], imagen: "e-commerce/producto-trece.png" },
  { id: 14, nombre: "Escopeta CG PS12G - 5 rondas", precio: 1800, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Marrón"], imagen: "e-commerce/producto-catorce.png" },
  { id: 15, nombre: "Escopeta Ferino SP-14 - 10 rondas", precio: 2200, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Greige"], imagen: "e-commerce/producto-quince.png" },
  { id: 16, nombre: "Pistola HJKE-11 Yukimura - variante Skippy - 30 rondas", precio: 4200, colores: ["Dorado", "Agrisado", "Verde", "Púrpura", "Blanco"], imagen: "e-commerce/producto-dieciseis.png" },
  { id: 17, nombre: "Escopeta Carnage - 10 rondas", precio: 6000, colores: ["Negro", "Amarillo", "Rojo", "Marrón", "Verde"], imagen: "e-commerce/producto-diecisiete.png" },
  { id: 18, nombre: "Escopeta CN/ST-23 - 20 rondas", precio: 4200, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Marrón"], imagen: "e-commerce/producto-dieciocho.png" },
  { id: 19, nombre: "Rifle de francotirador Eaton modelo 8 - 10 rondas", precio: 3000, colores: ["Negro", "Agrisado", "Greige", "Ocre", "Oliva"], imagen: "e-commerce/producto-diecinueve.png" },
  { id: 20, nombre: "Fusil de tirador SA M308 - 10 rondas", precio: 1600, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Greige"], imagen: "e-commerce/producto-veinte.png" },
  { id: 21, nombre: "Rifle de asalto AK-102 - 30 rondas", precio: 1400, colores: ["Negro", "Greige", "Oliva", "Ocre", "Lila"], imagen: "e-commerce/producto-veintiuno.png" },
  { id: 22, nombre: "Rifle de asalto bullup Tavor x95 - 30 rondas", precio: 1600, colores: ["Negro", "Agrisado", "Blanco", "Oliva", "Greige"], imagen: "e-commerce/producto-veintidos.png" },
  { id: 23, nombre: "Escopeta Lockwood 680 - 7 rondas", precio: 1800, colores: ["Negro", "Agrisado", "Blanco", "Oliva", "Greige"], imagen: "e-commerce/producto-veintitres.png" },
  { id: 24, nombre: "Rifle de francotirador M21 camuflado - 10 rondas", precio: 3500, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Musgo"], imagen: "e-commerce/producto-veinticuatro.png" },
  { id: 25, nombre: "Escopeta M2038 táctica - 10 rondas", precio: 7000, colores: ["Negro", "Marrón", "Greige", "Oliva", "Dorado"], imagen: "e-commerce/producto-veinticinco.png" },
];

// Generar tarjetas de productos
productos.forEach(el => {
  const productosCards = generadoraDeCards(el.nombre, el.precio, el.imagen);
  misProductos.appendChild(productosCards);
});

function generadoraDeCards(nombre, precio, imagen) {
  const contenedor = document.createElement('div');
  const tituloDOM = document.createElement('p');
  const imgDOM = document.createElement('img');
  const precioDOM = document.createElement("p");
  const botonAgregarAlCarrito = document.createElement('button');
  const botonSumarUnidad = document.createElement('button');
  const botonRestarUnidad = document.createElement('button');

  contenedor.classList.add('contenedorDeCard');
  tituloDOM.classList.add('tituloCard');
  precioDOM.classList.add('tituloCard');
  botonSumarUnidad.classList.add('boton');
  botonRestarUnidad.classList.add('boton');
  botonAgregarAlCarrito.addEventListener('click', () => {
    agregarAlCarrito(nombre, precio);
    mostrarAlertDeConfirmacion(nombre);
    actualizarCarrito();
  });
  botonSumarUnidad.addEventListener('click', () => {
    sumarUnidad(nombre);
  });
  botonRestarUnidad.addEventListener('click', () => {
    restarUnidad(nombre);
  });

  tituloDOM.innerText = nombre;
  precioDOM.innerText = `$${precio}`;
  imgDOM.src = imagen;
  botonAgregarAlCarrito.innerText = 'Agregar al carrito';
  botonSumarUnidad.innerText = '+';
  botonRestarUnidad.innerText = '-';

  contenedor.appendChild(tituloDOM);
  contenedor.appendChild(imgDOM);
  contenedor.appendChild(precioDOM);
  contenedor.appendChild(botonAgregarAlCarrito);
  contenedor.appendChild(botonSumarUnidad);
  contenedor.appendChild(botonRestarUnidad);
  return contenedor;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
  const verificador = carrito.some(el => el.nombre === nombre);
  if (verificador) {
    const producto = carrito.find(el => el.nombre === nombre);
    producto.cantidad += 1;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      cantidad: 1
    });
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para sumar un producto al carrito
function sumarUnidad(nombre) {
  const producto = carrito.find(el => el.nombre === nombre);
  if (producto) {
    producto.cantidad += 1;
  }
  actualizarCarrito();
}

// Función para restar un producto al carrito
function restarUnidad(nombre) {
  const producto = carrito.find(el => el.nombre === nombre);

  if (producto.cantidad <= 1) {
    const index = carrito.findIndex(el => el.nombre === nombre);
    carrito.splice(index, 1);
  } else {
    producto.cantidad -= 1;
  }
  actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
  carritoFisico.innerHTML = '';
  const totalProductos = carrito.reduce((acc, el) => acc + el.cantidad * el.precio, 0);
  totalCarrito.innerText = `Total: $${totalProductos}`;

  carrito.forEach(el => {
    const item = document.createElement('p');
    item.innerText = `${el.nombre} - $${el.precio} x ${el.cantidad}`;
    carritoFisico.appendChild(item);
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para confirmar el producto
function mostrarAlertDeConfirmacion(nombre) {
  Swal.fire({
    title: `${nombre} fue agregada al carrito`,
    icon: 'success',
    showConfirmButton: false,
    position: "top",
    timer: 3000,
  });
}

// Función para mostrar el carrito
mostrarCarritoBtn.addEventListener('click', () => {
  carritoFisico.classList.toggle('hidden');
});

// Función para vaciar el carrito
carritovaciado.addEventListener('click', () => {
  localStorage.removeItem("carrito");
  carrito.length = 0; // Vacía el array
  actualizarCarrito();
});

// Función para finalizar la compra
finalizarCompraBtn.addEventListener('click', () => {
  if (carrito.length > 0) {
    Swal.fire({
      title: 'Compra Finalizada',
      text: `Total a pagar: $${totalCarrito.innerText.split('$')[1]}`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      localStorage.removeItem("carrito");
      carrito.length = 0;
      actualizarCarrito();
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'El carrito está vacío',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
});

// Función para procesar la compra desde el formulario
compraForm.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const productoId = parseInt(productoIdInput.value);
  const colorId = parseInt(colorIdInput.value);
  const cantidad = parseInt(cantidadInput.value);

  const producto = productos.find(p => p.id === productoId);
  if (producto && colorId > 0 && colorId <= producto.colores.length && cantidad > 0) {
    const color = producto.colores[colorId - 1];
    agregarAlCarrito(producto.nombre, producto.precio * cantidad);
    Swal.fire({
      title: 'Compra Confirmada',
      text: `Producto: ${producto.nombre}\nColor: ${color}\nCantidad: ${cantidad}\nTotal: $${producto.precio * cantidad}`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then(() => {
      productoIdInput.value = '';
      colorIdInput.value = '';
      cantidadInput.value = '';
      actualizarCarrito();
    });
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Datos de compra inválidos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
});

// Función para mostrar el modal de bienvenida
function IngresoDeSolicitud() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = document.getElementById('edad').value;

  if (nombre && apellido && edad) {
    welcomeModal.classList.remove('hidden');
  } else {
    Swal.fire({
      title: 'Error',
      text: 'Todos los campos son requeridos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
}