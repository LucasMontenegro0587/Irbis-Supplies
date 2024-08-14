const datos = [];

// Lista definida - ORDENAR
const productos = [
  { id: 1, nombre: "Rifle de francotirador Broughton M2000-D - 5 rondas", precio: 3500, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Lila"] },
  { id: 2, nombre: "Pistola Glock 25 Radetec Slide c/ visor digital - 10 rondas", precio: 600, colores: ["Negro", "Agrisado", "Blanco", "Naranja", "Marrón"] },
  { id: 3, nombre: "Subfusil FN P90 - 50 rondas", precio: 2000, colores: ["Negro", "Agrisado", "Blanco", "Turquesa", "Rosa"] },
  { id: 4, nombre: "Kit convertor + FN Five-Seven - 20 rondas", precio: 3000, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Musgo"] },
  { id: 5, nombre: "Carabina Corvo CAR-4 - 20 rondas", precio: 2200, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Greige"] },
  { id: 6, nombre: "Subsubil TKA Cobra - 20 rondas", precio: 2200, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Marrón"] },
  { id: 7, nombre: "Subfusil SG Compact-5 - 20 rondas", precio: 2300, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Marrón"] },
  { id: 8, nombre: "Rifle táctico Swordfish pentaburst - 50 rondas", precio: 1700, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Musgo"] },
  { id: 9, nombre: "Rifle de asalto TAQ-VF 7S - 30 rondas", precio: 1600, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Musgo"] },
  { id: 10, nombre: "Revolver de acción simple Corvo DS6 duales - 5 rondas", precio: 800, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Púrpura"] },
  { id: 11, nombre: "Rifle de francotirador AIM 90 - 10 rondas", precio: 3200, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Oliva"] },
  { id: 12, nombre: "Fusil de asalto AK Surorov SV7 - 10 rondas", precio: 1400, colores: ["Negro", "Agrisado", "Dorado", "Ocre", "Marrón"] },
  { id: 13, nombre: "Rifle de francotirador AK-R - 30 rondas", precio: 3000, colores: ["Negro", "Agrisado", "Dorado", "Ocre", "Marrón"] },
  { id: 14, nombre: "Escopeta CG PS12G - 5 rondas", precio: 1800, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Marrón"] },
  { id: 15, nombre: "Escopeta Ferino SP-14 - 10 rondas", precio: 2200, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Greige"] },
  { id: 16, nombre: "Pistola HJKE-11 Yukimura - variante Skippy - 30 rondas", precio: 4200, colores: ["Dorado", "Agrisado", "Verde", "Púrpura", "Blanco"] },
  { id: 17, nombre: "Escopeta Carnage - 10 rondas", precio: 6000, colores: ["Negro", "Amarillo", "Rojo", "Marrón", "Verde"] },
  { id: 18, nombre: "Escopeta CN/ST-23 - 20 rondas", precio: 4200, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Marrón"] },
  { id: 19, nombre: "Rifle de francotirador Eaton modelo 8 - 10 rondas", precio: 3000, colores: ["Negro", "Agrisado", "Greige", "Ocre", "Oliva"] },
  { id: 20, nombre: "Fusil de tirador SA M308 - 10 rondas", precio: 1600, colores: ["Negro", "Agrisado", "Blanco", "Marrón", "Greige"] },
  { id: 21, nombre: "Rifle de asalto AK-102 - 30 rondas", precio: 1400, colores: ["Negro", "Greige", "Oliva", "Ocre", "Lila"] },
  { id: 22, nombre: "Rifle de asalto bullup Tavor x95 - 30 rondas", precio: 1600, colores: ["Negro", "Agrisado", "Blanco", "Oliva", "Greige"] },
  { id: 23, nombre: "Escopeta Lockwood 680 - 7 rondas", precio: 1800, colores: ["Negro", "Agrisado", "Blanco", "Oliva", "Greige"] },
  { id: 24, nombre: "Rifle de francotirador M21 camuflado - 10 rondas", precio: 3500, colores: ["Negro", "Agrisado", "Blanco", "Ocre", "Musgo"] },
  { id: 25, nombre: "Escopeta M2038 táctica - 10 rondas", precio: 7000, colores: ["Negro", "Marrón", "Greige", "Oliva", "Dorado"] },
];

// Variable global para almacenar el total acumulado y verificar acceso
let totalCarrito = 0;
let usuarioAccedido = false;

// Función para mostrar los productos
function mostrarProductos() {
  let mensaje = "Nuestro catálogo:\n";
  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    mensaje += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
  }
  return mensaje;
}

// Función para mostrar los colores disponibles
function mostrarColores(producto) {
  let mensaje = `Colores disponibles para ${producto.nombre}:\n`;
  producto.colores.forEach((color, index) => {
    mensaje += `${index + 1}. ${color}\n`;
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
  return !isNaN(numero) && Number.isFinite(numero) && numero >= 0;
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
  switch (confirmarCompra) {
    case true:
      alert(`Compra confirmada.\nProducto: ${producto.nombre}\nColor seleccionado: ${color}`);
      break;
    case false:
      alert("La compra ha sido cancelada.");
      break;
    default:
      alert("Opción desconocida.");
  }
}

function ingresoDeSolicitud() {
  let nombre;
  let apellido;
  let edad;

  while (!nombre || !esSoloLetras(nombre.trim())) {
    nombre = prompt("Ingresá tu nombre completo:");
    if (nombre === null) {
      alert("La operación está cancelada. No se ingresaron los datos solicitados.");
      return;
    }
    if (!esSoloLetras(nombre.trim())) {
      alert("El campo nombre debe contener solo letras y espacios. Por favor, reintentá de nuevo.");
    }
  }

  while (!apellido || !esSoloLetras(apellido.trim())) {
    apellido = prompt("Ingresá tu apellido completo:");
    if (apellido === null) {
      alert("La operación está cancelada. No se ingresaron los datos solicitados.");
      return;
    }
    if (!esSoloLetras(apellido.trim())) {
      alert("El campo apellido debe contener solo letras y espacios. Por favor, reintentá de nuevo.");
    }
  }

  while (!edad || !esEdadValida(edad)) {
    edad = prompt("Ingresá tu edad:");
    if (edad === null) {
      alert("La operación está cancelada. No se ingresaron los datos solicitados.");
      return;
    }
    if (!esEdadValida(edad)) {
      alert("El campo edad debe ser un número válido. Por favor, reintentá de nuevo.");
    }
  }

  const confirmar = confirm(`¿La información suministrada es correcta? Por favor verificá: \nTu nombre: ${nombre}\nTu apellido: ${apellido}\nTu edad: ${edad}`);
  if (confirmar) {
    const persona = {
      nombre: nombre,
      apellido: apellido,
      edad: edad
    };
    datos.push(persona);
    alert("Datos guardados con éxito.");
    console.log("Datos actuales:", datos);

    // Actualizar el estado de usuarioAccedido
    usuarioAccedido = true;

    // Ventanas emergentes adicionales
    alert("¡Bienvenido/a!");
    confirm("Estamos mejorando el espacio para ofrecerte el servicio que merecés. Próximamente nuevos productos, descuentos, y mucho más!");

    // Habilitar el botón "Mostrar carrito" y los botones de compra
    document.getElementById('show-cart').disabled = false;
    document.querySelectorAll('.buy-button').forEach(button => button.disabled = false);
  } else {
    alert("La operación está cancelada. No se ingresaron los datos solicitados.");
    return;
  }
}

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
      const productosMensaje = mostrarProductos();
      const eleccion = prompt(`${productosMensaje}\nIngresá el número del producto:`);

      productoSeleccionado = productos.find(p => p.id == eleccion);
      if (!productoSeleccionado) {
        alert("La opción ingresada no es válida. Por favor, reintentá.");
        break;
      }

      const coloresMensaje = mostrarColores(productoSeleccionado);
      const eleccionColor = parseInt(prompt(`${coloresMensaje}\nIngresá el número del color deseado:`), 10);

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
        totalCarrito += total; // Carrito acumulado
        break;
      } else {
        alert("La compra ha sido cancelada.");
      }
    } while (!productoSeleccionado);

    if (continuarCompra) {
      // Se muestra el total acumulado del carrito antes de preguntar si quiere seguir comprando
      alert(`El total acumulado de tu carrito es de $${totalCarrito}.`);
      continuarCompra = confirm("¿Deseás comprar algo más?");
    }
  }

  alert(`¡Hasta la próxima! El total de tu compra fue de $${totalCarrito}.`);

  // Solicitar la información de contacto
  let contacto;
  while (!contacto) {
    contacto = prompt("Por favor, ingresa tu correo electrónico o número de celular para que podamos coordinar la entrega:");
    if (contacto === null) {
      alert("La operación está cancelada. No se ingresó la información de contacto.");
      return;
    }
    // Validación del correo electrónico o número de celular
    if (!esCorreoValido(contacto) && !esNumeroCelularValido(contacto)) {
      alert("La información de contacto ingresada no es válida. Por favor, ingresa un correo electrónico o número de celular válido.");
      contacto = null; // Repetición del prompt
    } else {
      alert("Me pondré en contacto lo antes posible.");
      console.log("Información de contacto proporcionada:", contacto);
    }
  }
}

// Función para mostrar el total acumulado del carrito
function mostrarTotalCarrito() {
  if (!usuarioAccedido) {
    alert("Usuario desconocido. Acceso denegado.");
    return;
  }
  alert(`El total acumulado de tu carrito es de $${totalCarrito}.`);
}

// Asignar el evento click al botón "Mostrar carrito"
document.getElementById('show-cart').addEventListener('click', mostrarTotalCarrito);

// Función para agregar un producto al carrito
function addToCart(product) {
  if (!usuarioAccedido) {
    alert("Debés ingresar tus datos para continuar.");
    return;
  }

  // Mostrar el catálogo de productos
  mostrarYComprarProductos();
}

// Función para eliminar un producto del carrito
function removeFromCart(button) {
  const productPrice = parseFloat(button.parentElement.querySelector('p').textContent.split(' - $')[1]);
  totalCarrito -= productPrice;
  button.parentElement.remove();
  // Actualizamos el total en el carrito
  mostrarTotalCarrito();
}

// Función para vaciar el carrito
function clearCart() {
  const cartItems = document.querySelector('.cart-items');
  cartItems.innerHTML = '';
  totalCarrito = 0; // Reseteamos el total acumulado
  mostrarTotalCarrito();
}

// Añadimos eventos a los botones de compra
document.querySelectorAll('.buy-button').forEach(button => {
  button.addEventListener('click', (event) => {
    const product = event.target.closest('.product');
    addToCart(product);
  });
});

// Añadimos evento al botón de vaciar carrito
document.getElementById('clear-cart').addEventListener('click', clearCart);

// Habilitar el botón de vaciar carrito solo si el usuario ha ingresado sus datos
document.getElementById('clear-cart').disabled = true;
