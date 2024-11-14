const visitesMaximes: number = 2; // Declaro visitesMaximes com a const per a que no es pugui canviar
var comptadorVisites: number = 0; // Declaro comptadorVisites com a let perque es una variable global i ha de canviar cada vegada que una persona es a dins
const nomPagina: string = "Hola K Ace"; // Declaro nomPagina com a const, ja que el nom de la página no canviará
let missatgeBenvinguda: string = "Bienvenido"; // Declaro missatgeBenvinguda com a let, ja que el missatge de benvinguda canviarà

// Codi que s'executa quan s'obre la pàgina, sense bucle

console.log(nomPagina); // Mostra per consola el nom de la pàgina
comptadorVisites++; // Augmenta el comptador de visites
// Primera iteració
if (comptadorVisites > visitesMaximes) { // Si el comptador de visites es més gran que el nombre màxim de visites
   missatgeBenvinguda = "Has superat el nombre màxim de visites"; // Si el comptador de visites es més gran que el nombre màxim de visites, el missatge de benvinguda canvia
}
console.log(missatgeBenvinguda);  // Mostra per consola el missatge de benvinguda

// Segona iteració
comptadorVisites++;
if (comptadorVisites > visitesMaximes) {
   missatgeBenvinguda = "Has superat el nombre màxim de visites";
}
console.log(missatgeBenvinguda);

// Tercera iteració
comptadorVisites++;
if (comptadorVisites > visitesMaximes) {
   missatgeBenvinguda = "Has superat el nombre màxim de visites";
} 
console.log(missatgeBenvinguda);
