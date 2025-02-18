"use strict";
// ===================================
// |          DEFINICIÓN DE DATOS    |
// ===================================
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
// ===================================
// |      VALIDACIÓN DE CLIENTES     |
// ===================================
const filtrarClientesValidos = (clientes) => {
    return clientes.filter(cliente => cliente.email.includes('@'));
};
// ===================================
// |      GESTIÓN DE LOCALSTORAGE    |
// ===================================
const obtenerClientesGuardados = () => {
    return JSON.parse(localStorage.getItem("clientes") || "[]");
};
const inicializarDatosClientes = () => {
    const datosGuardados = obtenerClientesGuardados();
    if (datosGuardados.length === 0) {
        const clientesValidos = filtrarClientesValidos(clientes);
        localStorage.setItem("clientes", JSON.stringify(clientesValidos));
    }
};
// ===================================
// |       MANEJO DE EVENTOS         |
// ===================================
document.addEventListener("DOMContentLoaded", () => {
    inicializarDatosClientes();
    mostrarClientes();
});
// ===================================
// |    FUNCIONES DE VISUALIZACIÓN  |
// ===================================
function mostrarClientes() {
    const tablaClientes = document.getElementById('listaClientes');
    if (!tablaClientes)
        return;
    tablaClientes.innerHTML = '';
    const datosClientes = obtenerClientesGuardados();
    datosClientes.forEach((cliente) => {
        const fila = `<tr><td>${cliente.nombre}</td><td>${cliente.email}</td></tr>`;
        tablaClientes.insertAdjacentHTML('beforeend', fila);
    });
}
// ===================================
// |   FUNCIONES DE MANIPULACIÓN     |
// ===================================
const procesarEntradaUsuario = (event) => {
    event.preventDefault();
    const elementoInput = document.getElementById("titulo");
    const texto = elementoInput.value.trim();
    if (!texto)
        return;
    elementoInput.value = "";
    if (texto.includes(',')) {
        const [nombre, plataforma] = texto.split(',').map(t => t.trim());
        guardarProducto(nombre, plataforma);
    }
    else {
        guardarProducto(texto);
    }
};
const guardarProducto = (nombre, plataforma) => {
    plataforma ? videojuegos.set(nombre, plataforma) : peliculas.push(nombre);
};
// ===================================
// |    GENERACIÓN DE LISTADOS      |
// ===================================
const generarListado = (event) => {
    const boton = event.target;
    const contenedor = document.getElementById("lista-table");
    contenedor.innerHTML = '';
    const tabla = document.createElement("table");
    switch (boton.id) {
        case 'pelis':
            tabla.innerHTML = `<thead><tr><th>Películas</th></tr></thead>`;
            peliculas.forEach(p => tabla.innerHTML += `<tr><td>${p}</td></tr>`);
            break;
        case 'videojuegos':
            tabla.innerHTML = `<thead><tr><th>Videojuegos</th></tr></thead>`;
            videojuegos.forEach((p, j) => tabla.innerHTML += `<tr><td>${j} - ${p}</td></tr>`);
            break;
        case 'ambas':
            tabla.innerHTML = `<thead><tr><th>Películas</th><th>Videojuegos</th></tr></thead>`;
            const max = Math.max(peliculas.length, videojuegos.size);
            const juegos = Array.from(videojuegos);
            for (let i = 0; i < max; i++) {
                const pelicula = peliculas[i] || '';
                const juego = juegos[i] ? `${juegos[i][0]} - ${juegos[i][1]}` : '';
                tabla.innerHTML += `<tr><td>${pelicula}</td><td>${juego}</td></tr>`;
            }
            break;
    }
    contenedor.appendChild(tabla);
};
// ===================================
// |    MANEJO DE FORMULARIO        |
// ===================================
document.getElementById("mainForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const datosFormulario = new FormData(form);
    const nuevoCliente = {
        email: datosFormulario.get("email"),
        nombre: datosFormulario.get("nombre"),
        pelicula: datosFormulario.get("pelicula"),
        generos: datosFormulario.getAll("generes")
    };
    if (!filtrarClientesValidos([nuevoCliente]).length) {
        alert("Correo electrónico no válido");
        return;
    }
    const clientesActualizados = [...obtenerClientesGuardados(), nuevoCliente];
    localStorage.setItem("clientes", JSON.stringify(clientesActualizados));
    form.reset();
    mostrarClientes();
});
// ===================================
// |     CONFIGURACIÓN DE EVENTOS   |
// ===================================
document.getElementById("pelis")?.addEventListener("click", generarListado);
document.getElementById("videojuegos")?.addEventListener("click", generarListado);
document.getElementById("ambas")?.addEventListener("click", generarListado);
document.getElementById("enviar")?.addEventListener("click", procesarEntradaUsuario);
