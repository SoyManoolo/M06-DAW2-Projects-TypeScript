"use strict";
let dinero = Number(prompt("Diners disponibles: ")); // Pregunta que dinero tiene el cliente y lo guarda
let respuesta = prompt("Vols introduir un producte? Si/No"); // Pregunta si quiere introducir un producto
switch (respuesta) { // La respuesta debe ser Si/No, si no tirar error con alert y finalizar
    case "No":
        alert("Compra finalitzada"); // Si la respuesta es No, tiramos alert y finalizamos
        break;
    case "Si":
        let nomProducte = prompt("Nom del producte: "); // Preguntamos por el nombre del producto y lo guardamos
        let preu = Number(prompt("Preu del producte: ")); // Preguntamos por el precio del producto y lo guardamos
        let quantitat = Number(prompt("Quantitat del producte: ")); // Preguntamos por la cantidad de productos y lo guardamos
        let correcte = prompt("Introduir un altre producte? Si/No"); // Preguntamos si quiere introducir otro producto
        if (correcte == "No") { // Si la respuesta es No, comprobamos si el dinero es mayor o igual al precio total de los productos
            if (dinero >= preu * quantitat) { // Si el dinero es mayor o igual al precio total de los productos, confirmamos la compra
                alert("Ordre confirmada\n" + "Nom del producte: " + nomProducte + "\nPreu: " + preu + "\nQuantitat: " + quantitat + "\nPreu total: " + preu * quantitat + "\nDiners restants: " + (dinero - preu * quantitat)); // Mostramos un alert con los datos de la compra
            }
            else {
                alert("Ordre rebutjada\n" + "Nom del prodcute: " + nomProducte + "\nPreu: " + preu + "\nQuantitat: " + quantitat + "\nPreu total: " + preu * quantitat + "\nL'import total supera els diners disponibles"); // Si el dinero es menor al precio total de los productos, mostramos un alert con los datos de la compra
            }
        }
        else if (correcte == "Si") { // Si la respuesta es Si, preguntamos por otro producto
            let nomProducte2 = prompt("Nom del producte: ");
            let preu2 = Number(prompt("Preu del producte: "));
            let quantitat2 = Number(prompt("Quantitat del producte: "));
            if (dinero >= preu * quantitat + preu2 * quantitat2) { // Si el dinero es mayor o igual al precio total de los productos, confirmamos la compra
                alert("Ordre confirmada\n" + "Nom del producte: " + nomProducte + "\nPreu: " + preu + "\nQuantitat: " + quantitat + "\nNom del producte: " + nomProducte2 + "\nPreu: " + preu2 + "\nQuantitat: " + quantitat2 + "\nPreu total: " + (preu * quantitat + preu2 * quantitat2) + "\nDiners restants: " + (dinero - (preu * quantitat + preu2 * quantitat2)));
            }
            else {
                alert("Ordre rebutjada\n" + nomProducte + " - " + preu + "\n" + quantitat + "\nPreu total: " + preu * quantitat + "\n" + "L'import total supera els diners disponibles");
            }
        }
        break;
    default:
        alert("Error"); // Si la respuesta no es Si/No, mostramos un alert con error
        break;
}
