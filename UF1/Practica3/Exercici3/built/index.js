"use strict";
function paraula() {
    let word = document.getElementById("paraula").value;
    let letras = word.split("");
    let cantLetras = letras.length;
    if (cantLetras % 4 == 0) {
        console.log("La paraula es divisible per 4");
    }
    else {
        console.log("La paraula no es divisible per 4");
    }
    for (let i = 0; i < cantLetras; i++) {
        if (i % 2 == 0) {
            console.log(letras[i].toUpperCase());
        }
        else {
            console.log(letras[i].toLowerCase());
        }
    }
}
