function letra() {
    let letra = document.getElementById("letra") as HTMLInputElement;
    let mensaje = "";

    for(let i = 0; i < 10; i++) {
        if(i % 2 == 0) {
            mensaje += letra.value.toUpperCase();
        } else mensaje += letra.value.toLowerCase();
    }
}