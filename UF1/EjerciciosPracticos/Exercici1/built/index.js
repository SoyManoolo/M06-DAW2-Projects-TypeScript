"use strict";
function calcular() {
    let numero = document.getElementById("num");
    if (Number(numero.value) % 4 == 0) {
        alert("El número es divisible por 4");
    }
    else {
        alert("El número no es divisible por 4");
    }
}
