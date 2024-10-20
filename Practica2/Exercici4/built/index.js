"use strict";
/*
Pregunta que dinero tiene el cliente y lo guarda

Despues pregunta si quiere introducir un producto
La respuesta debe ser Si/No, si no tirar error con alert y finalizar
Si la respuesta es No, tiramos alert y finalizamos
Si la respuesta es Si:
Preguntamos por el nombre del producto y lo guardamos
Preguntamos por el precio del producto y lo guardamos
Preguntamos por la cantidad de productos y lo guardamos
Preguntamos si es correcto quiere introducir otro producto
Si quiere introducir otro producto, repetimos el proceso

Si ha marcado como correcto el producto, mostramos un mensaje:
Si el cliente tiene suficiente dinero, mostramos el siguiente mensaje:
Ordre confirmada
nomProducte - preu
quantitatProducte
total - preuTotal
Diners restants: dinersRestants

Si el cliente no tiene suficiente dinero, mostramos el siguiente mensaje:
Ordre rebutjada
nomProducte - preu
quantitatProducte
total - preuTotal
L'import total supera els diners disponibles
*/
let dinero = Number(prompt("Diners disponibles: "));
let respuesta = prompt("Vols introduir un producte?");
switch (respuesta) {
    case "No":
        alert("Compra finalitzada");
        break;
    case "Si":
        let nomProducte = prompt("Nom del producte: ");
        let preu = Number(prompt("Preu del producte: "));
        let quantitat = Number(prompt("Quantitat del producte: "));
        let correcte = prompt("Introduir un altre producte? Si/No");
        if (correcte == "No") {
            if (dinero >= preu * quantitat) {
                alert("Ordre confirmada\n" + "Nom del producte: " + nomProducte + "\nPreu: " + preu + "\nQuantitat: " + quantitat + "\nPreu total: " + preu * quantitat + "\nDiners restants: " + (dinero - preu * quantitat));
            }
            else {
                alert("Ordre rebutjada\n" + "Nom del prodcute: " + nomProducte + "\nPreu: " + preu + "\nQuantitat: " + quantitat + "\nPreu total: " + preu * quantitat + "\nL'import total supera els diners disponibles");
            }
        }
        else if (correcte == "Si") {
            let nomProducte2 = prompt("Nom del producte: ");
            let preu2 = Number(prompt("Preu del producte: "));
            let quantitat2 = Number(prompt("Quantitat del producte: "));
            if (dinero >= preu * quantitat + preu2 * quantitat2) {
                alert("Ordre confirmada\n" + "Nom del producte: " + nomProducte + "\nPreu: " + preu + "\nQuantitat: " + quantitat + "\nNom del producte: " + nomProducte2 + "\nPreu: " + preu2 + "\nQuantitat: " + quantitat2 + "\nPreu total: " + (preu * quantitat + preu2 * quantitat2) + "\nDiners restants: " + (dinero - (preu * quantitat + preu2 * quantitat2)));
            }
            else {
                alert("Ordre rebutjada\n" + nomProducte + " - " + preu + "\n" + quantitat + "\nPreu total: " + preu * quantitat + "\n" + "L'import total supera els diners disponibles");
            }
        }
        break;
    default:
        alert("Error");
        break;
}
