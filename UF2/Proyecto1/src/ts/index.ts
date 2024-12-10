let clientes: Map<string, string> = new Map([ // Map de clientes
    ['example@gmail.com', 'Example'],
    ['erik@gmail.com', 'Erik'],
    ['fer@gmail.com', 'Fer'],
    ['mouad#gmail.com', 'Mouad'],
    ['dani&gmail.com', 'Dani']
]); 
let peliculas: string[] = ['Inception', 'The Matrix', 'Interstellar']; // Array de películas
let videojuegos: Map<string, string> = new Map([ // Map de videojuegos
    ['The Legend of Zelda', 'Nintendo'],
    ['God of War', 'PlayStation'],
]);

document.getElementById("pelis")?.addEventListener("click", mostrarListas); // Evento para mostrar lista de películas
document.getElementById("videojuegos")?.addEventListener("click", mostrarListas); // Evento para mostrar lista de videojuegos
document.getElementById("ambas")?.addEventListener("click", mostrarListas); // Evento para mostrar ambas listas

document.getElementById("enviar")?.addEventListener("click", comprobarInput); // Evento para comprobar input

const validarEmail = (clientes: Map<string, string>): Map<string, string> => { // Función para validar emails
    const clientesValidos = new Map<string, string>();

    clientes.forEach((nombre, correo) => { // Recorrer el map de clientes
        if (correo.includes('@')) { // Si el correo contiene un @
            clientesValidos.set(correo, nombre); // Añadir al map de clientes válidos
        }
    });

    return clientesValidos;
};

function mostrarClientes(): void {
    const clientesValidos: Map<string, string> = validarEmail(clientes); // Llamar a la función validarEmail

    // Referencia a la tabla de clientes
    const listaClientes: HTMLTableElement = document.getElementById('listaClientes') as HTMLTableElement;
    listaClientes.innerHTML = '';

    // Generar filas de la tabla
    clientesValidos.forEach((nombre, correo) => {
        const fila = document.createElement("tr");

        const celdaNombre: HTMLTableCellElement = document.createElement("td");
        celdaNombre.textContent = nombre;

        const celdaCorreo: HTMLTableCellElement = document.createElement("td");
        celdaCorreo.textContent = correo;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCorreo);

        listaClientes.appendChild(fila);
    });
}


function comprobarInput(event: MouseEvent): void {
    event.preventDefault();
    let input: HTMLInputElement = document.getElementById("titulo") as HTMLInputElement;
    let texto: string = input.value;
    
    if (texto == "") return;

    input.value = "";   
    if (texto.includes(',')) {
        let textoArray: string[] = texto.split(',');
        guardarNombre(textoArray[0], textoArray[1]);
    } else guardarNombre(texto);
}

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

function mostrarListas(event: MouseEvent): void {
    const botonId: HTMLButtonElement = event.target as HTMLButtonElement;

    const lista: HTMLDivElement = document.getElementById("lista-table") as HTMLDivElement;

    // Limpiar contenido previo
    lista.innerHTML = '';

    const tabla: HTMLTableElement = document.createElement("table")
    lista.appendChild(tabla);

    if (botonId.id == "ambas") {
        const titulo: HTMLTableSectionElement = document.createElement("thead");
        const fila: HTMLTableRowElement = document.createElement("tr");
        const celda: HTMLTableCellElement = document.createElement("th");
        celda.textContent = "Películas";
        const celda2: HTMLTableCellElement = document.createElement("th");
        celda2.textContent = "Videojuegos";

        tabla.appendChild(titulo);
        titulo.appendChild(fila);
        fila.appendChild(celda);
        fila.appendChild(celda2);

        const max: number = Math.max(peliculas.length, videojuegos.size);
        const videojuegosArray: [string, string] [] = Array.from(videojuegos);

        for(let i = 0; i <max; i++) {
            const fila: HTMLTableRowElement = document.createElement("tr");

            const celdaPelicula: HTMLTableCellElement = document.createElement("td");
            celdaPelicula.textContent = peliculas[i] || "";
            fila.appendChild(celdaPelicula);

            const celdaVideojuego: HTMLTableCellElement = document.createElement("td");
            if(videojuegosArray[i]) {
                const [juego, plataforma] : [string, string] = videojuegosArray[i];
                celdaVideojuego.textContent = `${juego} - ${plataforma}`;
            } else {
                celdaVideojuego.textContent = ""; // Si no hay más videojuegos, dejar celda vacía
            }

            tabla.appendChild(fila);
            fila.appendChild(celdaVideojuego);

        }
    }

    // Crear tabla para películas
    if (botonId.id == "pelis") {

        const titulo: HTMLTableSectionElement = document.createElement("thead");
        const fila: HTMLTableRowElement = document.createElement("tr");
        const celda: HTMLTableCellElement = document.createElement("th");
        celda.textContent = "Películas";

        tabla.appendChild(titulo);
        titulo.appendChild(fila);
        fila.appendChild(celda);

        for (const pelicula of peliculas) {
            const fila: HTMLTableRowElement = document.createElement("tr");

            const celda: HTMLTableCellElement = document.createElement("td");
            celda.textContent = pelicula;

            tabla.appendChild(fila);
            fila.appendChild(celda);
        }
    }

    // Crear tabla para videojuegos
    if (botonId.id == "videojuegos") {

        const titulo: HTMLTableSectionElement = document.createElement("thead");
        const fila: HTMLTableRowElement = document.createElement("tr");
        const celda: HTMLTableCellElement = document.createElement("th");
        celda.textContent = "Videojuegos";

        tabla.appendChild(titulo);
        titulo.appendChild(fila);
        fila.appendChild(celda);

        for (const [juego, plataforma] of videojuegos) {
            const fila: HTMLTableRowElement = document.createElement("tr");

            const celdaJuego: HTMLTableCellElement = document.createElement("td");
            celdaJuego.textContent = juego + " - " + plataforma;

            tabla.appendChild(fila);
            fila.appendChild(celdaJuego);
        }
    }
}