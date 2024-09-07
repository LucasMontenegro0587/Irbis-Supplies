const carritoFisico = document.getElementById ('carrito')
const misProductos = document.getElementById('productos')
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let carritovaciado = document.getElementById('vaciar-carrito')

// Lista definida - ORDENADA
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

productos.forEach(el => {
  const productosCards = generadoraDeCards(el.nombre, el.precio, el.imagen)
  misProductos.appendChild(productosCards)
})

function generadoraDeCards (nombre, precio, imagen){
  const contenedor = document.createElement('div')
  const tituloDOM = document.createElement('p')
  const imgDOM = document.createElement('img')
  const precioDOM = document.createElement("p")
  const botonAgregarAlCarrito = document.createElement('button')
  const botonSumarUnidad = document.createElement('button')
  const botonRestarUnidad = document.createElement('button')

  contenedor.classList.add('contenedorDeCard')
  tituloDOM.classList.add('tituloCard')
  precioDOM.classList.add('tituloCard')
  botonSumarUnidad.classList.add('boton')
  botonRestarUnidad.classList.add('boton')
  botonAgregarAlCarrito.addEventListener('click', ( ) =>{
    agregarAlCarrito (nombre, precio), mostrarAlertDeConfirmacion (nombre)
  })
  botonSumarUnidad.addEventListener('click', ( ) =>{
    sumarUnidad (nombre)
  })
  botonRestarUnidad.addEventListener('click', ( ) =>{
    restarUnidad (nombre)
  })

  tituloDOM.innerText = nombre
  precioDOM.innerText = `$${precio}`
  imgDOM.src = imagen
  botonAgregarAlCarrito.innerText = 'agregar al carrito'
  botonSumarUnidad.innerText = '+'
  botonRestarUnidad.innerText = '-'

  contenedor.appendChild(tituloDOM)
  contenedor.appendChild(imgDOM)
  contenedor.appendChild(precioDOM)
  contenedor.appendChild(botonAgregarAlCarrito)
  contenedor.appendChild(botonSumarUnidad)
  contenedor.appendChild(botonRestarUnidad)
  return contenedor
}

// Función para agregar un producto al carrito
function agregarAlCarrito (nombre, precio){
    
  const verificador = carrito.some(el => {
    return el.nombre === nombre
   })
   if(verificador){
const producto = carrito.find(el => {
    return el.nombre === nombre
})
producto.cantidad += 1
   }

   else{
    carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: 1
    })
   }   
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
function actualizarCarrito (){
  const totalAPagar = document.createElement('p')
totalAPagar.classList.add('boton')
  carrito.innerHTML = '' 
  const totalProductos = carrito.reduce((acc, el) =>{
      return acc + el.cantidad * el.precio
  }, 0)
  totalAPagar.innerText = totalProductos
  carrito.forEach(el => {
      carritoFisico.appendChild(totalAPagar)
      localStorage.setItem("carrito", JSON.stringify(carrito))
  })

}

// Función para confirmar el producto
function mostrarAlertDeConfirmacion (nombre){
  Swal.fire({
     title: `${nombre} fue agregada al carrito`,
     icon: 'success',
     showConfirmButton: false,
     position: "top",
     timer: 3000,
   })
 
}

// Función para ver el total del carrito


// Función para limpiar el carrito
//function limpiarCarrito (){
//  localStorage.clear()
//}
carritovaciado.addEventListener('click', () => {
  localStorage.clear()
}
)

/*// Variable global para almacenar el total acumulado y verificar acceso
let totalCarrito = 0;
let usuarioAccedido = false;

// Función para mostrar los productos
function mostrarProductos() {
  let mensaje = "Nuestro catálogo:";
  productos.forEach(producto => {
    mensaje += `${producto.id}. ${producto.nombre} - $${producto.precio}`;
  });
  document.getElementById('productos').innerHTML = mensaje;
}

// Función para mostrar los colores disponibles
function mostrarColores(producto) {
  let mensaje = `Colores disponibles para ${producto.nombre}`;
  producto.colores.forEach((color, index) => {
    mensaje += `${index + 1}. ${color}`;
  });
  return mensaje;
}

// Función para validar que solo contiene letras y espacios
function esSoloLetras(valor) {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(valor);
}

// Función para validar edad
function esEdadValida(valor) {
  const numero = Number(valor);
  return !isNaN(numero) && numero > 0;
}

// Función para validar un correo electrónico
function esCorreoValido(valor) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valor);
}

// Función para validar un número de celular
function esNumeroCelularValido(valor) {
  const regex = /^[0-9]{10,15}$/;
  return regex.test(valor);
}

// Función para manejar la confirmación de la compra
function manejarConfirmacionCompra(confirmarCompra, producto, color) {
  if (confirmarCompra) {
    document.getElementById('mensaje-compra').innerHTML = `Compra confirmada.<br>Producto: ${producto.nombre}<br>Color seleccionado: ${color}`;
  } else {
    document.getElementById('mensaje-compra').innerHTML = "La compra ha sido cancelada.";
  }
}

// Función para validar y procesar la solicitud de ingreso
function IngresoDeSolicitud() {
  let nombre = document.getElementById('nombre').value.trim();
  let apellido = document.getElementById('apellido').value.trim();
  let edad = document.getElementById('edad').value.trim();

  if (!esSoloLetras(nombre)) {
    alert("El campo nombre debe contener solo letras y espacios. Por favor, reintentá de nuevo.");
    return;
  }

  if (!esSoloLetras(apellido)) {
    alert("El campo apellido debe contener solo letras y espacios. Por favor, reintentá de nuevo.");
    return;
  }

  if (!esEdadValida(edad)) {
    alert("El campo edad debe ser un número válido. Por favor, reintentá de nuevo.");
    return;
  }

  const confirmar = confirm(`¿La información suministrada es correcta? Por favor verificá: \nTu nombre: ${nombre}\nTu apellido: ${apellido}\nTu edad: ${edad}`);
  if (confirmar) {
    const persona = {
      nombre: nombre,
      apellido: apellido,
      edad: edad
    };
    datos.push(persona);
    document.getElementById('datos-guardados').innerHTML = "Datos guardados con éxito.";

    // Actualizar el estado de usuarioAccedido
    usuarioAccedido = true;

    alert("¡Bienvenido/a!");
    confirm("Estamos mejorando el espacio para ofrecerte el servicio que merecés. Próximamente nuevos productos, descuentos, y mucho más!");

    document.getElementById('show-cart').disabled = false;
    document.querySelectorAll('.buy-button').forEach(button => button.disabled = false);
  } else {
    alert("La operación está cancelada. No se ingresaron los datos solicitados.");
    return;
  }
}

// Función para mostrar productos y manejar compra
function mostrarYComprarProductos() {
  if (!usuarioAccedido) {
    alert("Usuario desconocido. Acceso denegado.");
    return;
  }

  let continuarCompra = true;

  while (continuarCompra) {
    let productoSeleccionado;
    let cantidad;
    let colorSeleccionado;

    do {
      mostrarProductos();
      const eleccion = prompt("Ingresá el número del producto:");
      productoSeleccionado = productos.find(p => p.id == eleccion);
      if (!productoSeleccionado) {
        alert("La opción ingresada no es válida. Por favor, reintentá.");
        break;
      }

      const coloresMensaje = mostrarColores(productoSeleccionado);
      document.getElementById('colores').innerHTML = coloresMensaje;
      const eleccionColor = parseInt(prompt("Ingresá el número del color deseado:"), 10);

      colorSeleccionado = productoSeleccionado.colores[eleccionColor - 1];
      if (!colorSeleccionado) {
        alert("La opción de color ingresada no es válida. Por favor, reintentá.");
        continue;
      }

      do {
        cantidad = parseInt(prompt(`Seleccionaste ${productoSeleccionado.nombre}. ¿Cuántas unidades querés comprar?`), 10);
        if (isNaN(cantidad) || cantidad <= 0) {
          alert("La cantidad ingresada no es válida. Por favor, ingresá una cantidad válida.");
        }
      } while (isNaN(cantidad) || cantidad <= 0);

      const total = cantidad * productoSeleccionado.precio;
      const confirmarCompra = confirm(`¿Confirmás la compra de ${cantidad} unidad/es de ${productoSeleccionado.nombre} por un total de $${total}?`);
      manejarConfirmacionCompra(confirmarCompra, productoSeleccionado, colorSeleccionado);

      if (confirmarCompra) {
        alert(`Adquiriste ${cantidad} unidad/es de ${productoSeleccionado.nombre}. ¡Muchas gracias por tu tiempo!`);
        totalCarrito += total;
        break;
      } else {
        alert("La compra ha sido cancelada.");
      }
    } while (!productoSeleccionado);

    if (continuarCompra) {
      document.getElementById('total-carrito').innerHTML = `El total acumulado de tu carrito es de $${totalCarrito}.`;
      continuarCompra = confirm("¿Deseás comprar algo más?");
    }
  }

  document.getElementById('total-compra').innerHTML = `¡Hasta la próxima! El total de tu compra fue de $${totalCarrito}.`;

  let contacto;
  while (!contacto) {
    contacto = prompt("Por favor, ingresa tu correo electrónico o número de celular para que podamos coordinar la entrega:");
    if (contacto === null) {
      alert("La operación está cancelada. No se ingresó la información de contacto.");
      return;
    }
    if (!esCorreoValido(contacto) && !esNumeroCelularValido(contacto)) {
      alert("La información de contacto ingresada no es válida. Por favor, ingresa un correo electrónico o número de celular válido.");
      contacto = null;
    } else {
      alert("Me pondré en contacto lo antes posible.");
      document.getElementById('contacto').innerHTML = `Información de contacto proporcionada: ${contacto}`;
    }
  }
}

// Función para mostrar el total acumulado del carrito
function mostrarTotalCarrito() {
  if (!usuarioAccedido) {
    alert("Usuario desconocido. Acceso denegado.");
    return;
  }
  document.getElementById('total-carrito').innerHTML = `El total acumulado de tu carrito es de $${totalCarrito}.`;
}

document.getElementById('show-cart').addEventListener('click', mostrarTotalCarrito);

// Función para vaciar el carrito
function clearCart() {
  document.querySelector('.cart-items').innerHTML = '';
  totalCarrito = 0;
  mostrarTotalCarrito();
}

document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', (event) => {
    const product = event.target.closest('.product');
    addToCart(product);
  });
});

document.getElementById('clear-cart').addEventListener('click', clearCart);
document.getElementById('clear-cart').disabled = true;

// Cerrar el modal de bienvenida
document.getElementById('close-modal').addEventListener('click', () => {
document.getElementById('welcome-modal').style.display = 'none';
});

// Habilitar botones y guardar datos de usuario al hacer clic en "Ingresar"
document.getElementById('ingreso-solicitud').addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = document.getElementById('edad').value;

  if (!nombre || !apellido || !edad) {
      alert("Por favor, completá todos los campos.");
      return;
  }

  // Simular guardado de datos y habilitar botones
  document.getElementById('datos-guardados').textContent = `Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`;
  document.getElementById('show-cart').disabled = false;
  document.getElementById('clear-cart').disabled = false;
});

// Confirmar compra de productos
document.getElementById('confirmar-compra').addEventListener('click', () => {
  const productoId = document.getElementById('producto-id').value;
  const colorId = document.getElementById('color-id').value;
  const cantidad = document.getElementById('cantidad').value;

  if (!productoId || !colorId || !cantidad) {
      alert("Por favor, completá todos los campos.");
      return;
  }

  // Lógica para agregar productos al carrito
  agregarAlCarrito(nombre, color, cantidad);
});

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, color, cantidad) {
  const carrito = obtenerCarrito();
  carrito.push({ nombre, color, cantidad });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

// Función para obtener el carrito de localStorage
function obtenerCarrito() {
  const carrito = localStorage.getItem('carrito');
  return carrito ? JSON.parse(carrito) : [];
}

// Función para mostrar los productos del carrito
function mostrarCarrito() {
  const carrito = obtenerCarrito();
  const carritoContainer = document.getElementById('productos');
  carritoContainer.innerHTML = carrito.map(item => `Producto: ${item.productoId}, Color: ${item.colorId}, Cantidad: ${item.cantidad}`).join('<br>');
}

// Vaciar carrito
document.getElementById('clear-cart').addEventListener('click', () => {
  localStorage.removeItem('carrito');
  mostrarCarrito();
});

// Mostrar carrito al hacer clic en el botón
document.getElementById('show-cart').addEventListener('click', mostrarCarrito);
*/