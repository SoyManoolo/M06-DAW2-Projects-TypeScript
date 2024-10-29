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
        var correcte = prompt("Es correcto el pedido?"); // Preguntamos si quiere introducir otro producto
        while (correcte != "Si") { // Mientras la respuesta no sea Si, seguimos preguntando por los datos del producto
            let nomProducte = prompt("Nom del producte: ");
            let preu = Number(prompt("Preu del producte: "));
            let quantitat = Number(prompt("Quantitat del producte: "));
            var correcte = prompt("Es correcto el pedido?");
        }
        if (dinero >= preu * quantitat) { // Si el dinero es mayor o igual al precio total de los productos, confirmamos la compra
            alert("Ordre confirmada\n" + "Nom del producte: " + nomProducte + "\nPreu: " + preu + "\nQuantitat: " + quantitat + "\nPreu total: " + preu * quantitat + "\nDiners restants: " + (dinero - preu * quantitat)); // Mostramos un alert con los datos de la compra
        }
        else {
            alert("Ordre rebutjada\n" + "Nom del prodcute: " + nomProducte + "\nPreu: " + preu + "\nQuantitat: " + quantitat + "\nPreu total: " + preu * quantitat + "\nL'import total supera els diners disponibles"); // Si el dinero es menor al precio total de los productos, mostramos un alert con los datos de la compra
        }
        break;
    default:
        alert("Error"); // Si la respuesta no es Si/No, mostramos un alert con error
        break;
}
