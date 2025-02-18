"use strict";
// ==========================
// |  Definición de Datos   |
// ==========================
let clientes = [
    { email: "example@gmail.com", nombre: "Example", pelicula: "The Matrix", generos: ["Accion", "Thriller"] },
    { email: "erik@gmail.com", nombre: "Erik", pelicula: "Interstellar", generos: ["Terror", "Ciencia ficcion"] },
    { email: "fer@gmail.com", nombre: "Fer", pelicula: "The Matrix", generos: ["Suspense", "Fantasia"] },
    { email: "mouad#gmail.com", nombre: "Mouad", pelicula: "The Matrix", generos: ["Accion"] },
    { email: "dani&gmail.com", nombre: "Dani", pelicula: "Inception", generos: ["Comedia"] }
];
let peliculas = ['Inception', 'The Matrix', 'Interstellar'];
let videojuegos = new Map([
    ['The Legend of Zelda', 'Nintendo'],
    ['God of War', 'PlayStation'],
]);
// ==============================
// | Función para Validar Email |
// ==============================
const validarEmailArray = (clientes) => {
    return clientes.filter(cliente => cliente.email.includes('@'));
};
// ================================
// | Cargar Clientes desde Storage |
// ================================
let clientesGuardados = JSON.parse(localStorage.getItem("clientes") || "null");
if (!clientesGuardados) {
    // Si localStorage está vacío, guardar la lista inicial de clientes
    clientes = validarEmailArray(clientes);
    localStorage.setItem("clientes", JSON.stringify(clientes));
}
else {
    // Si hay datos en localStorage, usarlos en lugar de la lista inicial
    clientes = clientesGuardados;
}
// ==========================
// |   Eventos de Botones   |
// ==========================
document.getElementById("pelis")?.addEventListener("click", mostrarListas);
document.getElementById("videojuegos")?.addEventListener("click", mostrarListas);
document.getElementById("ambas")?.addEventListener("click", mostrarListas);
document.getElementById("enviar")?.addEventListener("click", comprobarInput);
document.getElementById("formbutton")?.addEventListener("click", () => {
    window.location.href = "/public/views/formulario.html";
});
document.getElementById("home")?.addEventListener("click", () => {
    window.location.href = "/index.html";
});
// ==========================
// |  Funciones de Clientes |
// ==========================
function mostrarClientes() {
    const listaClientes = document.getElementById('listaClientes');
    // Solo ejecutar si el elemento existe
    if (listaClientes) {
        listaClientes.innerHTML = '';
        let clientesGuardados = JSON.parse(localStorage.getItem("clientes") || "[]");
        clientesGuardados.forEach((cliente) => {
            const fila = document.createElement("tr");
            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = cliente.nombre;
            const celdaCorreo = document.createElement("td");
            celdaCorreo.textContent = cliente.email;
            fila.appendChild(celdaNombre);
            fila.appendChild(celdaCorreo);
            listaClientes.appendChild(fila);
        });
    }
}
// Mostrar los clientes guardados al cargar la página
document.addEventListener("DOMContentLoaded", mostrarClientes);
// ===================================
// | Funciones de Guardado y Listado |
// ===================================
function comprobarInput(event) {
    event.preventDefault();
    let input = document.getElementById("titulo");
    let texto = input.value;
    if (texto == "")
        return;
    input.value = "";
    if (texto.includes(',')) {
        let textoArray = texto.split(',');
        guardarNombre(textoArray[0], textoArray[1]);
    }
    else {
        guardarNombre(texto);
    }
}
function guardarNombre(nombre, plataforma) {
    if (plataforma) {
        if (!videojuegos.has(nombre)) {
            videojuegos.set(nombre, plataforma);
        }
    }
    else {
        peliculas.push(nombre);
    }
}
// ===============================
// | Función para Mostrar Listas |
// ===============================
function mostrarListas(event) {
    const botonId = event.target;
    const lista = document.getElementById("lista-table");
    lista.innerHTML = '';
    const tabla = document.createElement("table");
    lista.appendChild(tabla);
    if (botonId.id == "ambas") {
        const titulo = document.createElement("thead");
        const fila = document.createElement("tr");
        const celda = document.createElement("th");
        celda.textContent = "Películas";
        const celda2 = document.createElement("th");
        celda2.textContent = "Videojuegos";
        tabla.appendChild(titulo);
        titulo.appendChild(fila);
        fila.appendChild(celda);
        fila.appendChild(celda2);
        const max = Math.max(peliculas.length, videojuegos.size);
        const videojuegosArray = Array.from(videojuegos);
        for (let i = 0; i < max; i++) {
            const fila = document.createElement("tr");
            const celdaPelicula = document.createElement("td");
            celdaPelicula.textContent = peliculas[i] || "";
            fila.appendChild(celdaPelicula);
            const celdaVideojuego = document.createElement("td");
            if (videojuegosArray[i]) {
                const [juego, plataforma] = videojuegosArray[i];
                celdaVideojuego.textContent = `${juego} - ${plataforma}`;
            }
            else {
                celdaVideojuego.textContent = "";
            }
            tabla.appendChild(fila);
            fila.appendChild(celdaVideojuego);
        }
    }
    if (botonId.id == "pelis") {
        const titulo = document.createElement("thead");
        const fila = document.createElement("tr");
        const celda = document.createElement("th");
        celda.textContent = "Películas";
        tabla.appendChild(titulo);
        titulo.appendChild(fila);
        fila.appendChild(celda);
        for (const pelicula of peliculas) {
            const fila = document.createElement("tr");
            const celda = document.createElement("td");
            celda.textContent = pelicula;
            tabla.appendChild(fila);
            fila.appendChild(celda);
        }
    }
    if (botonId.id == "videojuegos") {
        const titulo = document.createElement("thead");
        const fila = document.createElement("tr");
        const celda = document.createElement("th");
        celda.textContent = "Videojuegos";
        tabla.appendChild(titulo);
        titulo.appendChild(fila);
        fila.appendChild(celda);
        for (const [juego, plataforma] of videojuegos) {
            const fila = document.createElement("tr");
            const celdaJuego = document.createElement("td");
            celdaJuego.textContent = juego + " - " + plataforma;
            tabla.appendChild(fila);
            fila.appendChild(celdaJuego);
        }
    }
}
// =======================================================================
// | Evento para Capturar Datos del Formulario y Guardar en LocalStorage |
// =======================================================================
// Añade esta función de validación de contraseña
const validarPassword = (password) => {
    // Debe contener al menos: 1 mayúscula, 1 minúscula, 1 número y 8 caracteres mínimo
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
};
// Modifica el evento submit del formulario así:
document.getElementById("mainForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let password = document.getElementById("password"); // Nuevo
    let pelicula = document.getElementById("pelicula");
    let generosSelect = document.getElementById("generos");
    let generos = Array.from(generosSelect.selectedOptions).map(option => option.value);
    let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    let nuevoCliente = { email: email.value, nombre: nombre.value, pelicula: pelicula.value, generos };
    const clientesValidos = validarEmailArray([nuevoCliente]);
    const passwordValido = validarPassword(password.value); // Validación añadida
    if (clientesValidos.length > 0 && passwordValido) {
        clientes.push(nuevoCliente);
        localStorage.setItem("clientes", JSON.stringify(clientes));
        mostrarClientes();
        event.target.reset();
    }
    else {
        let mensajeError = "";
        if (clientesValidos.length === 0)
            mensajeError += "Correo inválido. ";
        if (!passwordValido)
            mensajeError += "La contraseña debe tener: 8+ caracteres, 1 mayúscula, 1 minúscula y 1 número.";
        alert(mensajeError);
    }
});
// ==========================
// |    Tareas Pendientes   |
// ==========================
/*
Cosas a hacer:
- Validar la contraseña con un patrón que incluya una letra mayúscula, una minúscula, un número y al menos 8 caracteres.
- Enviar los datos con un GET a la página principal sin usar alerts para los errores.
*/ 
