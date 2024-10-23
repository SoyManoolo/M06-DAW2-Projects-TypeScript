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

let dinero: number = Number(prompt("Diners disponibles: "));
