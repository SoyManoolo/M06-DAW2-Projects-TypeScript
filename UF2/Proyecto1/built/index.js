"use strict";
var _a, _b, _c, _d;
let clientes = new Map([
    ['example@gmail.com', 'Example'],
    ['erik@gmail.com', 'Erik'],
    ['fer@gmail.com', 'Fer'],
    ['mouad#gmail.com', 'Mouad'],
    ['dani&gmail.com', 'Dani']
]);
let peliculas = ['Inception', 'The Matrix', 'Interstellar']; // Array de películas
let videojuegos = new Map([
    ['The Legend of Zelda', 'Nintendo'],
    ['God of War', 'PlayStation'],
]);
(_a = document.getElementById("pelis")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", mostrarListas); // Evento para mostrar lista de películas
(_b = document.getElementById("videojuegos")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", mostrarListas); // Evento para mostrar lista de videojuegos
(_c = document.getElementById("ambas")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", mostrarListas); // Evento para mostrar ambas listas
(_d = document.getElementById("enviar")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", comprobarInput); // Evento para comprobar input
const validarEmail = (clientes) => {
    const clientesValidos = new Map();
    clientes.forEach((nombre, correo) => {
        if (correo.includes('@')) { // Si el correo contiene un @
            clientesValidos.set(correo, nombre); // Añadir al map de clientes válidos
        }
    });
    return clientesValidos;
};
function mostrarClientes() {
    const clientesValidos = validarEmail(clientes); // Llamar a la función validarEmail
    // Referencia a la tabla de clientes
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';
    // Generar filas de la tabla
    clientesValidos.forEach((nombre, correo) => {
        const fila = document.createElement("tr");
        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = nombre;
        const celdaCorreo = document.createElement("td");
        celdaCorreo.textContent = correo;
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCorreo);
        listaClientes.appendChild(fila);
    });
}
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
    else
        guardarNombre(texto);
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
function mostrarListas(event) {
    const botonId = event.target;
    const lista = document.getElementById("lista-table");
    // Limpiar contenido previo
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
                celdaVideojuego.textContent = ""; // Si no hay más videojuegos, dejar celda vacía
            }
            tabla.appendChild(fila);
            fila.appendChild(celdaVideojuego);
        }
    }
    // Crear tabla para películas
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
    // Crear tabla para videojuegos
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
