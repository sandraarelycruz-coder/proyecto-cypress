
// EJERCICIO 1: Códigos de descuento
import "./style.css";
document.getElementById("validar").addEventListener("click", () => {
    const codigo = document.getElementById("codigo").value;
    const resultado = document.getElementById("resultadoDescuento");

    if (codigo === "OFERTA20") {
        resultado.textContent = "Descuento aplicado correctamente";
    } else {
        resultado.textContent = "Código de descuento inválido";
    }
});

// EJERCICIO 2: Puntos de fidelidad

document.getElementById("calcular").addEventListener("click", () => {
    const compra = Number(document.getElementById("compra").value);
    const puntos = compra * 2;

    document.getElementById("resultadoPuntos").textContent =
        `Has obtenido ${puntos} puntos`;
});


// EJERCICIO 3: Lista de tareas

document.getElementById("agregarTarea").addEventListener("click", () => {
    const entrada = document.getElementById("tarea");
    const texto = entrada.value.trim();

    if (texto !== "") {
        const elemento = document.createElement("li");
        elemento.textContent = texto;

        document.getElementById("listaTareas").appendChild(elemento);
        entrada.value = "";
    }
});



// =================================
// EJERCICIO 4: CARRITO DE COMPRAS
// =================================

let total = 0;

const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const botonAgregar = document.getElementById("agregarProducto");
const listaCarrito = document.getElementById("listaCarrito");
const resultadoTotal = document.getElementById("total");
const mensajeCarrito = document.getElementById("mensajeCarrito");

// Función para mostrar los precios
function mostrarPrecio(precio) {
    return Number.isInteger(precio)
        ? precio.toString()
        : precio.toFixed(2);
}

// Agregar productos al carrito
botonAgregar.addEventListener("click", () => {

    const nombre = nombreProducto.value.trim();
    const precio = Number(precioProducto.value);

    // Validar los campos
    if (nombre === "" || precioProducto.value.trim() === "" ||
        !Number.isFinite(precio) || precio <= 0) {

        mensajeCarrito.textContent =
            "Ingresa un producto y un precio válido";

        return;
    }

    // Crear elemento de la lista
    const producto = document.createElement("li");

    producto.classList.add("producto-carrito");

    producto.innerHTML = `
        <span class="nombre-item"></span>
        <strong class="precio-item"></strong>
        <button type="button" class="eliminarProducto">
            ✖
        </button>
    `;

    // Colocar los datos de forma segura
    producto.querySelector(".nombre-item").textContent = nombre;
    producto.querySelector(".precio-item").textContent =
        `$${mostrarPrecio(precio)}`;

    // Agregar el producto a la lista
    listaCarrito.appendChild(producto);

    // Actualizar el total
    total += precio;

    resultadoTotal.textContent =
        `Total: $${mostrarPrecio(total)}`;

    // Limpiar los campos
    nombreProducto.value = "";
    precioProducto.value = "";

    mensajeCarrito.textContent = "";

    // Eliminar producto y actualizar total
    producto.querySelector(".eliminarProducto")
        .addEventListener("click", () => {

            total -= precio;

            producto.remove();

            resultadoTotal.textContent =
                `Total: $${mostrarPrecio(total)}`;
        });

});


// EJERCICIO 5: Formulario de contacto

document.getElementById("formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const respuesta = document.getElementById("respuestaFormulario");

    if (nombre === "" || correo === "" || mensaje === "") {
        respuesta.textContent = "Todos los campos son obligatorios";
    } else {
        respuesta.textContent = "Formulario enviado correctamente";
    }
});
