"use strict";
const visitesMaximes = 2; // Declaro visitesMaximes com a const per a que no es pugui canviar
var comptadorVisites = 0; // Declaro comptadorVisites com a let perque es una variable global i ha de canviar cada vegada que una persona es a dins
const nomPagina = "Hola K Ace"; // Declaro nomPagina com a const, ja que el nom de la página no canviará
let missatgeBenvinguda = "Bienvenido"; // Declaro missatgeBenvinguda com a let, ja que el missatge de benvinguda canviarà
console.log(nomPagina); // Mostra per consola el nom de la pàgina
do {
    console.log(missatgeBenvinguda); // Mostra per consola el missatge de benvinguda
    comptadorVisites++; // Augmenta el comptador de visites
} while (comptadorVisites < visitesMaximes);
missatgeBenvinguda = "Has superat el nombre màxim de visites"; // Si el comptador de visites es més gran que el nombre màxim de visites, el missatge de benvinguda canvia
console.log(missatgeBenvinguda);
