"use strict";
function carregarCookies() {
    let arrayCookies = document.cookie.split("; ");
    let nomCookie = "";
    let valorCookie = "";
    let h1 = document.getElementById("header");
    let p = document.getElementById("paragraph");
    for (let cookie of arrayCookies) {
        let temp = cookie.split("=");
        nomCookie = temp[0];
        valorCookie = temp[1];
        console.log(`Nom de la cookie: ${nomCookie}; valor de la cookie: ${valorCookie}`);
        if (nomCookie == "fondo" && valorCookie == "Azul") {
            document.body.style.backgroundColor = "blue";
        }
        else if (nomCookie == "fondo" && valorCookie == "Verde") {
            document.body.style.backgroundColor = "green";
        }
        else if (nomCookie == "fondo" && valorCookie == "Rojo") {
            document.body.style.backgroundColor = "red";
        }
        else if (nomCookie == "fondo" && valorCookie == "Blanco") {
            document.body.style.backgroundColor = "white";
        }
        if (nomCookie == "idioma" && valorCookie == "Castellano") {
            h1.innerHTML = "Texto en castellano";
            p.innerHTML = "Para ver los cambios, recarga la página.";
        }
        else if (nomCookie == "idioma" && valorCookie == "Catalan") {
            h1.innerHTML = "Text en català";
            p.innerHTML = "Per veure els canvis, actualitzar la pàgina.";
        }
        else if (nomCookie == "idioma" && valorCookie == "Ingles") {
            h1.innerHTML = "Text in english";
            p.innerHTML = "To see the changes, reload the page.";
        }
    }
}
//Castellano, azul persistente
//Catalan que expire
