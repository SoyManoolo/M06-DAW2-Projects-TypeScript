"use strict";
//Funció per provar les funcions realitzades, comenteu i descomenteu una linea per separat per provar les diferents opcions
function classificarParaules(lista) {
    let paraules = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].length > 5) {
            paraules.push(lista[i]);
        }
    }
    console.log(paraules);
}
function analitzarTemperatures(...numeros) {
    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    let avg = 0;
    for (let numero of numeros) {
        avg += numero;
    }
    avg = avg / numeros.length;
    let tabla = document.getElementById("taulaTemperatures");
    let fila = tabla.insertRow();
    let celdaMax = fila.insertCell();
    celdaMax.textContent = max.toString();
    let celdaMin = fila.insertCell();
    celdaMin.textContent = min.toString();
    let celdaAvg = fila.insertCell();
    celdaAvg.textContent = avg.toFixed(2).toString();
}
function enviarMissatges(a, b, saludo) {
    if (typeof a === "string" && typeof b === "string") {
        let arroba = false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] == "@")
                arroba = true;
        }
        if (arroba && saludo != null) {
            console.log(b + " " + saludo);
        }
        else if (arroba && saludo == null) {
            console.log(b);
        }
        else
            console.log("No es tracta d'un email");
    }
    else if (typeof a === "number" && typeof b === "string") {
        if (a.toString().length == 9 && saludo == null) {
            alert(b);
        }
        else if (a.toString().length == 9 && saludo != null) {
            alert(b + " " + saludo);
        }
        else {
            console.log("No es un telefon mòbil");
        }
    }
    else
        throw new Error("Els parametres no son correctes");
}
function execucions() {
    const paraules = ["cotxe", "avió", "ferrocarril", "vaixell", "motocicleta", "tractor"]; //Resultat: 4 elements: ferrocarril, vaixell, motocicleta, tractor
    classificarParaules(paraules);
    const paraules1 = ["blau", "vermell", "taronja", "gris", "platejat"]; //Resultat: 3 elements: vermell, taronja, platejat
    classificarParaules(paraules1);
    const paraules2 = ["gos", "gat", "elefant", "caball"]; //Resultat: 2 elements: elefant, caball
    classificarParaules(paraules2);
    // Exercici 2: Analitzar Temperatures
    analitzarTemperatures(12, 4, 30, 2, 11, 26); //Resultat: Mitjana 14.17, Màxima 30, Mínima 2 
    analitzarTemperatures(9, 15, 7, 5, 8); //Resultat: Mitjana 8.80, Màxima 15, Mínima 5 
    analitzarTemperatures(19, 20, 21); //Resultat: Mitjana 20.00, Màxima 21, Mínima 19 
    // Exercici 3: Enviar Missatges
    enviarMissatges("test@mail.com", "Demano informació sobre aquest curs"); //Resultat: Missatge enviat a l'email, contingut: Demano informació sobre aquest curs
    enviarMissatges("test@mail.com", "Demano informació sobre aquest curs", "Salutacions"); //Resultat: Missatge enviat a l'email, contingut: Salutacions Demano informació sobre aquest curs
    enviarMissatges(985421122, "Demano informació sobre aquest curs"); //Resultat (alert): Missatge enviat al telèfon, contingut: Demano informació sobre aquest curs
    enviarMissatges(985421122, "Demano informació sobre aquest curs", "Salutacions"); //Resultat (alert): Missatge enviat al telèfon, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges("error", "error"); //Resultat: L'email no té un format vàlid.
}
