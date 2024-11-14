function paraula() {
    let word: string = (document.getElementById("paraula") as HTMLInputElement).value;

    let letras: string[] = word.split("");
    let cantLetras: number = letras.length;

    if (cantLetras % 4 == 0) {
        console.log("La paraula es divisible per 4");
    } else {
        console.log("La paraula no es divisible per 4");
    }

    for (let i = 0; i < cantLetras; i++) {
        if (i % 2 == 0) {
            console.log(letras[i].toUpperCase());
        } else {
            console.log(letras[i].toLowerCase());}
    }
}
