"use strict";
/*
Crea un objecte literal (ni interface, ni type, ni class) que contindrà el nom del restaurant,
la ubicació i una llista de plats, cada plat amb el nom i el preu (mínim 3 plats).
*/
const restaurant = {
    nom: "Bar Manolo",
    ubicacio: "Passeig de Gràcia 89",
    plat: [
        { nom: "bravas", preu: 4.99 },
        { nom: "jamón ibérico", preu: 8.99 },
        { nom: "croqueta de pollo", preu: 1 },
    ]
};
function init() {
    infoRestaurant(restaurant);
}
function infoRestaurant(restaurant) {
    const titulo = document.getElementById("titulo");
    const ubicacio = document.getElementById("ubicacio");
    const carta = document.getElementById("carta");
    const h2 = document.getElementById("h2");
    console.log(restaurant);
    carta.innerHTML = "";
    if (!restaurant) {
        titulo.textContent = "El restaurant no està obert";
    }
    else {
        titulo.innerHTML = restaurant.nom;
        ubicacio.innerHTML = restaurant.ubicacio;
        h2.innerHTML = "Carta";
        for (const plat of restaurant.plat) {
            carta.innerHTML += `<li>${plat.nom} - ${plat.preu}€</li>`;
        }
    }
}
function total() {
    let total = 0;
    for (const plat of restaurant.plat) {
        total += plat.preu;
    }
    return total;
}
function afegirPlat() {
    const plat = document.getElementById("nom-plat");
    const preu = document.getElementById("preu-plat");
    plat.value = plat.value.trim();
    preu.value = preu.value.trim();
    if (plat.value == "" || preu.value == "") {
        alert("Has d'omplir tots els camps");
        return;
    }
    else {
        restaurant.plat.push({ nom: plat.value, preu: parseFloat(preu.value) });
        infoRestaurant(restaurant);
    }
    plat.value = "";
    preu.value = "";
}
/*
Funcions

1. Crea una funció que rep l’objecte anterior de manera opcional. Si rep l’objecte,
escriu a l’HTML el nom del restaurant, la ubicació i el menú d’una forma estructurada (no imprimint l’objecte).
Si no rep res, escriu un missatge dient “El restaurant no està obert”. Has de cridar aquesta funció quan carrega la pàgina.

2. Crea una funció que sumi el preu de tots els plats i retorni el total.

3. Crea una funció per afegir un plat nou. El plat i el preu s’introduiran per inputs de l’HTML.
*/ 
