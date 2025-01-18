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

    const listaClientes: HTMLTableElement = document.getElementById('listaClientes') as HTMLTableElement; // Obtener referencia de la tabla de clientes
    listaClientes.innerHTML = ''; // Limpiar contenido previo

    clientesValidos.forEach((nombre, correo) => { // Recorrer el map de clientes válidos
        const fila = document.createElement("tr"); // Crear fila

        listaClientes.appendChild(fila); // Añadir fila a la tabla

        const celdaNombre: HTMLTableCellElement = document.createElement("td"); // Crear celda para nombre
        celdaNombre.textContent = nombre; // Añadir nombre a la celda

        const celdaCorreo: HTMLTableCellElement = document.createElement("td"); // Crear celda para correo
        celdaCorreo.textContent = correo; // Añadir correo a la celda

        fila.appendChild(celdaNombre); // Añadir celda de nombre a la fila
        fila.appendChild(celdaCorreo); // Añadir celda de correo a la fila

    });
}


function comprobarInput(event: MouseEvent): void { // Función para comprobar input
    event.preventDefault(); // Prevenir comportamiento por defecto
    let input: HTMLInputElement = document.getElementById("titulo") as HTMLInputElement; // Obtener referencia del input
    let texto: string = input.value; // Obtener valor del input
    
    if (texto == "") return; // Si el input está vacío, retornar

    input.value = ""; // Limpiar input
    if (texto.includes(',')) { // Si el texto contiene una coma
        let textoArray: string[] = texto.split(','); // Separar el texto por comas
        guardarNombre(textoArray[0], textoArray[1]); // Llamar a la función guardarNombre con el primer y segundo elemento del array
    } else guardarNombre(texto); // Llamar a la función guardarNombre con el texto
}

function guardarNombre(nombre: string): void; // Sobrecarga de funciones con un solo parámetro
function guardarNombre(nombre: string, plataforma: string): void; // Sobrecarga de funciones con dos parámetros

function guardarNombre(nombre: string, plataforma?: string): void { // Función para guardar nombre
    if (plataforma) { // Si la plataforma existe
        if (!videojuegos.has(nombre)) { // Si el videojuego no existe
            videojuegos.set(nombre, plataforma); // Añadir videojuego al map de videojuegos
        }
    } else {
        peliculas.push(nombre); // Añadir película al array de películas
    }
}

function mostrarListas(event: MouseEvent): void { // Función para mostrar listas
    const botonId: HTMLButtonElement = event.target as HTMLButtonElement; // Obtener referencia del botón

    const lista: HTMLDivElement = document.getElementById("lista-table") as HTMLDivElement; // Obtener referencia de la lista

    lista.innerHTML = ''; // Limpiar contenido previo

    const tabla: HTMLTableElement = document.createElement("table"); // Crear tabla
    lista.appendChild(tabla); // Añadir tabla a la lista

    if (botonId.id == "ambas") { // Si el botón es el de ambas listas
        const titulo: HTMLTableSectionElement = document.createElement("thead"); // Crear cabecera
        const fila: HTMLTableRowElement = document.createElement("tr"); // Crear fila
        const celda: HTMLTableCellElement = document.createElement("th"); // Crear celda
        celda.textContent = "Películas"; // Añadir texto a la celda
        const celda2: HTMLTableCellElement = document.createElement("th"); // Crear segunda celda
        celda2.textContent = "Videojuegos"; // Añadir texto a la segunda celda

        tabla.appendChild(titulo); // Añadir cabecera a la tabla
        titulo.appendChild(fila); // Añadir fila a la cabecera
        fila.appendChild(celda); // Añadir celda a la fila
        fila.appendChild(celda2); // Añadir segunda celda a la fila

        const max: number = Math.max(peliculas.length, videojuegos.size); // Obtener el máximo de películas y videojuegos
        const videojuegosArray: [string, string] [] = Array.from(videojuegos); // Convertir map de videojuegos a array

        for(let i = 0; i <max; i++) { // Recorrer el máximo de películas y videojuegos
            const fila: HTMLTableRowElement = document.createElement("tr"); // Crear fila

            const celdaPelicula: HTMLTableCellElement = document.createElement("td"); // Crear celda para película
            celdaPelicula.textContent = peliculas[i] || ""; // Añadir película a la celda
            fila.appendChild(celdaPelicula); // Añadir celda de película a la fila

            const celdaVideojuego: HTMLTableCellElement = document.createElement("td"); // Crear celda para videojuego
            if(videojuegosArray[i]) { // Si hay videojuegos
                const [juego, plataforma] : [string, string] = videojuegosArray[i]; // Obtener juego y plataforma
                celdaVideojuego.textContent = `${juego} - ${plataforma}`; // Añadir texto a la celda
            } else {
                celdaVideojuego.textContent = ""; // Si no hay más videojuegos, dejar celda vacía
            }

            tabla.appendChild(fila); // Añadir fila a la tabla
            fila.appendChild(celdaVideojuego); // Añadir celda de videojuego a la fila

        }
    }

    if (botonId.id == "pelis") { // Si el botón es el de películas

        const titulo: HTMLTableSectionElement = document.createElement("thead"); // Crear cabecera
        const fila: HTMLTableRowElement = document.createElement("tr"); // Crear fila
        const celda: HTMLTableCellElement = document.createElement("th"); // Crear celda
        celda.textContent = "Películas"; // Añadir texto a la celda

        tabla.appendChild(titulo); // Añadir cabecera a la tabla
        titulo.appendChild(fila); // Añadir fila a la cabecera
        fila.appendChild(celda); // Añadir celda a la fila

        for (const pelicula of peliculas) { // Recorrer el array de películas
            const fila: HTMLTableRowElement = document.createElement("tr"); // Crear fila

            const celda: HTMLTableCellElement = document.createElement("td"); // Crear celda
            celda.textContent = pelicula; // Añadir película a la celda

            tabla.appendChild(fila); // Añadir fila a la tabla
            fila.appendChild(celda); // Añadir celda a la fila
        }
    }

    if (botonId.id == "videojuegos") { // Si el botón es el de videojuegos

        const titulo: HTMLTableSectionElement = document.createElement("thead"); // Crear cabecera
        const fila: HTMLTableRowElement = document.createElement("tr"); // Crear fila
        const celda: HTMLTableCellElement = document.createElement("th"); // Crear celda
        celda.textContent = "Videojuegos"; // Añadir texto a la celda

        tabla.appendChild(titulo); // Añadir cabecera a la tabla
        titulo.appendChild(fila); // Añadir fila a la cabecera
        fila.appendChild(celda); // Añadir celda a la fila

        for (const [juego, plataforma] of videojuegos) { // Recorrer el map de videojuegos
            const fila: HTMLTableRowElement = document.createElement("tr"); // Crear fila

            const celdaJuego: HTMLTableCellElement = document.createElement("td"); // Crear celda
            celdaJuego.textContent = juego + " - " + plataforma; // Añadir texto a la celda

            tabla.appendChild(fila); // Añadir fila a la tabla
            fila.appendChild(celdaJuego); // Añadir celda a la fila
        }
    }
}