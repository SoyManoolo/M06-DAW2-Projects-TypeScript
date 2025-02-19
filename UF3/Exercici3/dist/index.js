"use strict";
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");
let contador = 0;
boton.addEventListener('click', () => {
    lista.innerHTML += `<li> ${contador} </li>`;
    contador++;
});
