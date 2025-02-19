// ===================================
// |          DEFINICIÓN DE DATOS    |
// ===================================
// Lista de clientes con datos como email, nombre, película favorita y géneros preferidos
let clientes = [
    { email: "example@gmail.com", nombre: "Example", pelicula: "The Matrix", generos: ["Accion", "Thriller"] },
    { email: "erik@gmail.com", nombre: "Erik", pelicula: "Interstellar", generos: ["Terror", "Ciencia ficcion"] },
    { email: "fer@gmail.com", nombre: "Fer", pelicula: "The Matrix", generos: ["Suspense", "Fantasia"] },
    { email: "mouad#gmail.com", nombre: "Mouad", pelicula: "The Matrix", generos: ["Accion"] },
    { email: "dani&gmail.com", nombre: "Dani", pelicula: "Inception", generos: ["Comedia"] }
];

// Listado de películas
let peliculas: string[] = ['Inception', 'The Matrix', 'Interstellar'];

// Mapa de videojuegos con sus respectivas plataformas
let videojuegos: Map<string, string> = new Map([
    ['The Legend of Zelda', 'Nintendo'],
    ['God of War', 'PlayStation'],
]);

// ===================================
// |      VALIDACIÓN DE CLIENTES     |
// ===================================
// Filtra los clientes válidos verificando que el email contenga '@'
const filtrarClientesValidos = (clientes: Array<{ email: string; nombre: string; pelicula: string; generos: string[] }>) => {
    return clientes.filter(cliente => cliente.email.includes('@'));
};

// ===================================
// |      GESTIÓN DE LOCALSTORAGE    |
// ===================================
// Obtiene los clientes almacenados en localStorage o un array vacío si no existen
const obtenerClientesGuardados = () => {
    return JSON.parse(localStorage.getItem("clientes") || "[]");
};

// Inicializa los datos de clientes en localStorage si no existen
const inicializarDatosClientes = () => {
    const datosGuardados = obtenerClientesGuardados();
    
    if (datosGuardados.length === 0) { // Si no hay datos guardados, inicializar con los datos de clientes
        const clientesValidos = filtrarClientesValidos(clientes);
        localStorage.setItem("clientes", JSON.stringify(clientesValidos));
    }
};

// ===================================
// |       MANEJO DE EVENTOS         |
// ===================================
// Ejecuta las funciones de inicialización y muestra clientes al cargar la página
document.addEventListener("DOMContentLoaded", () => { 
    inicializarDatosClientes();
    mostrarClientes();
});

// ===================================
// |    FUNCIONES DE VISUALIZACIÓN  |
// ===================================
// Muestra la lista de clientes en la tabla HTML
function mostrarClientes(): void {
    const tablaClientes = document.getElementById('listaClientes');
    if (!tablaClientes) return;

    tablaClientes.innerHTML = '';
    const datosClientes = obtenerClientesGuardados();

    datosClientes.forEach((cliente: { nombre: string; email: string }) => { // Recorrer el array de clientes
        const fila = `<tr><td>${cliente.nombre}</td><td>${cliente.email}</td></tr>`; // Crear fila con datos del cliente
        tablaClientes.insertAdjacentHTML('beforeend', fila);
    });
}

// ===================================
// |   FUNCIONES DE MANIPULACIÓN     |
// ===================================
// Procesa la entrada del usuario desde un formulario
const procesarEntradaUsuario = (event: Event) => {
    event.preventDefault();
    const elementoInput = document.getElementById("titulo") as HTMLInputElement;
    const texto = elementoInput.value.trim();
    
    if (!texto) return;
    elementoInput.value = "";
    
    if (texto.includes(',')) {
        const [nombre, plataforma] = texto.split(',').map(t => t.trim());
        guardarProducto(nombre, plataforma);
    } else {
        guardarProducto(texto);
    }
};

// Guarda un nuevo producto en la lista de películas o videojuegos
const guardarProducto = (nombre: string, plataforma?: string) => {
    plataforma ? videojuegos.set(nombre, plataforma) : peliculas.push(nombre);
};

// ===================================
// |    GENERACIÓN DE LISTADOS      |
// ===================================
// Genera listados de películas y videojuegos en una tabla HTML
const generarListado = (event: Event) => {
    const boton = event.target as HTMLButtonElement;
    const contenedor = document.getElementById("lista-table")!;
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
// Maneja el envío del formulario de clientes
document.getElementById("mainForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    
    const datosFormulario = new FormData(form);
    const nuevoCliente = {
        email: datosFormulario.get("email") as string,
        nombre: datosFormulario.get("nombre") as string,
        pelicula: datosFormulario.get("pelicula") as string,
        generos: datosFormulario.getAll("generes") as string[]
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
// Asigna eventos a los botones para generar listados y procesar entradas
document.getElementById("pelis")?.addEventListener("click", generarListado);
document.getElementById("videojuegos")?.addEventListener("click", generarListado);
document.getElementById("ambas")?.addEventListener("click", generarListado);
document.getElementById("enviar")?.addEventListener("click", procesarEntradaUsuario);

document.getElementById("formbutton")?.addEventListener("click", () => {
    window.location.href = "/public/views/formulario.html";
});

document.getElementById("home")?.addEventListener("click", () => {
    window.location.href = "/index.html";
});
