// ==========================
// |  Definición de Datos   |
// ==========================
let clientes = [
    { email: "example@gmail.com", nombre: "Example", pelicula: "The Matrix", generos: ["Accion", "Thriller"] },
    { email: "erik@gmail.com", nombre: "Erik",  pelicula: "Interstellar", generos: ["Terror", "Ciencia ficcion"] },
    { email: "fer@gmail.com", nombre: "Fer", pelicula: "The Matrix", generos: ["Suspense", "Fantasia"] },
    { email: "mouad#gmail.com", nombre: "Mouad", pelicula: "The Matrix", generos: ["Accion"] },
    { email: "dani&gmail.com", nombre: "Dani", pelicula: "Inception", generos: ["Comedia"] }
];

let peliculas: string[] = ['Inception', 'The Matrix', 'Interstellar'];
let videojuegos: Map<string, string> = new Map([
    ['The Legend of Zelda', 'Nintendo'],
    ['God of War', 'PlayStation'],
]);

// Guardar clientes en LocalStorage al cargar el script
localStorage.setItem("clientes", JSON.stringify(clientes));

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
function mostrarClientes(): void {
    const listaClientes: HTMLTableElement = document.getElementById('listaClientes') as HTMLTableElement;
    listaClientes.innerHTML = '';

    clientes.forEach(cliente => {
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

// ==============================
// | Función para Validar Email |
// ==============================
const validarEmail = (clientes: Map<string, string>): Map<string, string> => {
    const clientesValidos = new Map<string, string>();
    clientes.forEach((nombre, correo) => {
        if (correo.includes('@')) {
            clientesValidos.set(correo, nombre);
        }
    });
    return clientesValidos;
};

// ===================================
// | Funciones de Guardado y Listado |
// ===================================
function comprobarInput(event: MouseEvent): void {
    event.preventDefault();
    let input: HTMLInputElement = document.getElementById("titulo") as HTMLInputElement;
    let texto: string = input.value;

    if (texto == "") return;
    input.value = "";

    if (texto.includes(',')) {
        let textoArray: string[] = texto.split(',');
        guardarNombre(textoArray[0], textoArray[1]);
    } else {
        guardarNombre(texto);
    }
}

// Sobrecarga de función para guardar nombres
function guardarNombre(nombre: string): void;
function guardarNombre(nombre: string, plataforma: string): void;
function guardarNombre(nombre: string, plataforma?: string): void {
    if (plataforma) {
        if (!videojuegos.has(nombre)) {
            videojuegos.set(nombre, plataforma);
        }
    } else {
        peliculas.push(nombre);
    }
}

// ===============================
// | Función para Mostrar Listas |
// ===============================
function mostrarListas(event: MouseEvent): void {
    const botonId: HTMLButtonElement = event.target as HTMLButtonElement;
    const lista: HTMLDivElement = document.getElementById("lista-table") as HTMLDivElement;
    lista.innerHTML = '';

    const tabla: HTMLTableElement = document.createElement("table");
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
            } else {
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
document.querySelector("form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let pelicula = (document.getElementById("pelicula") as HTMLInputElement).value;
    let generos = Array.from(
        (document.getElementById("generos") as HTMLSelectElement).selectedOptions
    ).map(option => option.value);

    let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    clientes.push({ email, nombre, pelicula, generos });
    localStorage.setItem("clientes", JSON.stringify(clientes));
});

// ==========================
// |    Tareas Pendientes   |
// ==========================
/*
Cosas a hacer:
- Validar la contraseña con un patrón que incluya una letra mayúscula, una minúscula, un número y al menos 8 caracteres.
- Enviar los datos con un GET a la página principal sin usar alerts para los errores.
- Al abrir la página, cargar los datos desde LocalStorage para que sean persistentes.
*/

