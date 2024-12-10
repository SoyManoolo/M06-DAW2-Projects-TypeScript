
//Funció per provar les funcions realitzades, comenteu i descomenteu una linea per separat per provar les diferents opcions
function classificarParaules (lista: string[]) {
    let paraules: string[] = []; //Array per guardar les paraules amb més de 5 lletres
    for (let i = 0; i < lista.length; i++) { //Recorrem la llista de paraules
        if (lista[i].length > 5) { //Si la paraula té més de 5 lletres
            paraules.push(lista[i]); //Afegim la paraula a l'array
        }
    }
    console.log(paraules);
}

function analitzarTemperatures (...numeros: number[]) {
    let max = Math.max(...numeros); //Spread operator per passar els valors de l'array com a paràmetres
    let min = Math.min(...numeros); //Spread operator per passar els valors de l'array com a paràmetres
    let avg = 0; //Variable per guardar la mitjana

    for (let numero of numeros) { //Recorrem l'array de números
        avg += numero; //Sumem els números per calcular la mitjana
    }

    avg = avg / numeros.length; //Dividim la suma dels números pel total de números per obtenir la mitjana

    let tabla = document.getElementById("taulaTemperatures") as HTMLTableElement; //Obtenim la taula de la vista

    let fila = tabla.insertRow(); //Afegim una fila a la taula

    let celdaMax = fila.insertCell(); //Afegim una cel·la a la fila
    celdaMax.textContent = max.toString(); //Afegim el valor de la temperatura màxima a la cel·la

    let celdaMin = fila.insertCell();
    celdaMin.textContent = min.toString();

    let celdaAvg = fila.insertCell();
    celdaAvg.textContent = avg.toFixed(2).toString();
}

function enviarMissatges(a: string | number, b: string, saludo?: string){
    if (typeof a === "string" && typeof b === "string") { //Comprovem que els paràmetres siguin de tipus string
        let arroba: Boolean = false; //Variable per comprovar si l'email té arroba
        for(let i = 0; i < a.length; i++) { //Recorrem l'email
            if(a[i] == "@") arroba = true; //Si trobem una arroba, canviem el valor de la variable
        }
        if(arroba && saludo != null) { //Si l'email té arroba i el saludo no és null
            console.log(b + " " + saludo) //Mostrem el missatge amb el saludo
        } else if(arroba && saludo == null){ //Si l'email té arroba i el saludo és null
            console.log(b) //Mostrem el missatge sense saludo
        } else console.log("No es tracta d'un email") //Si l'email no té arroba mostrem un missatge d'error
    } else if(typeof a === "number" && typeof b === "string"){ //Comprovem que els paràmetres siguin de tipus number i string
        if(a.toString().length == 9 && saludo == null){ //Si el número té 9 dígits i el saludo és null
            alert(b); //Mostrem un alert amb el missatge
        } else if (a.toString().length == 9 && saludo != null){ //Si el número té 9 dígits i el saludo no és null
            alert(b + " " + saludo); //Mostrem un alert amb el missatge i el saludo
        } else { //Si el número no té 9 dígits
            console.log("No es un telefon mòbil") //Mostrem un missatge d'error
        }
    } else throw new Error("Els parametres no son correctes"); //Si els paràmetres no són de tipus string o number, llancem un error
}

function execucions(){
    
    const paraules:string[] = ["cotxe", "avió", "ferrocarril", "vaixell", "motocicleta", "tractor"]; //Resultat: 4 elements: ferrocarril, vaixell, motocicleta, tractor
    classificarParaules(paraules);
    const paraules1:string[] = ["blau", "vermell", "taronja", "gris", "platejat"]; //Resultat: 3 elements: vermell, taronja, platejat
    classificarParaules(paraules1);
    const paraules2:string[] = ["gos", "gat", "elefant", "caball"]; //Resultat: 2 elements: elefant, caball
    classificarParaules(paraules2);


    // Exercici 2: Analitzar Temperatures
    analitzarTemperatures(12,4,30,2,11,26); //Resultat: Mitjana 14.17, Màxima 30, Mínima 2 
    analitzarTemperatures(9,15,7,5,8); //Resultat: Mitjana 8.80, Màxima 15, Mínima 5 
    analitzarTemperatures(19,20,21); //Resultat: Mitjana 20.00, Màxima 21, Mínima 19 

    // Exercici 3: Enviar Missatges
    enviarMissatges("test@mail.com", "Demano informació sobre aquest curs"); //Resultat: Missatge enviat a l'email, contingut: Demano informació sobre aquest curs
    enviarMissatges("test@mail.com", "Demano informació sobre aquest curs", "Salutacions"); //Resultat: Missatge enviat a l'email, contingut: Salutacions Demano informació sobre aquest curs
    enviarMissatges(985421122, "Demano informació sobre aquest curs"); //Resultat (alert): Missatge enviat al telèfon, contingut: Demano informació sobre aquest curs
    enviarMissatges(985421122, "Demano informació sobre aquest curs", "Salutacions"); //Resultat (alert): Missatge enviat al telèfon, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges("error", "error"); //Resultat: L'email no té un format vàlid.
}