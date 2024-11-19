let categories: Map<string, string> = new Map();
let productes: Map<string, number> = new Map();


function addTo() {
    const btnId: string = (event?.target as HTMLElement).id;
    
    if(btnId == "addCategory") {
        let category: string = (document.getElementById("category")! as HTMLInputElement).value;
        categories.set(category, category);
        console.log(category + " se ha añadido correctamente");
    } else if(btnId == "addProduct") {
        let product: string = (document.getElementById("product")! as HTMLInputElement).value;
        let quant: number = parseInt((document.getElementById("cantidad")! as HTMLInputElement).value);
        productes.set(product, quant);
        console.log(product + " " + quant + " se ha añadido correctamente");
}
}

function show() {
    const btnId: string = (event?.target as HTMLElement).id;
    if(btnId == "showCategories") {
        const divCategories:HTMLElement = document.getElementById("listaCategorias")!;
        divCategories.innerHTML = "";
        categories.forEach((value, key) => {
            divCategories.innerHTML += value + "<br>";
        });
    } else if(btnId == "showProducts") {
        const divProductes:HTMLElement = document.getElementById("listaProductos")!;
        divProductes.innerHTML = "";
        productes.forEach((value, key) => {
            divProductes.innerHTML += key + " " + value + "<br>";
        });
    }
}

function sale() {
    const product: string = (document.getElementById("product")! as HTMLInputElement).value;
    const price: number = parseInt((document.getElementById("price")! as HTMLInputElement).value);

    productes.forEach((value, key) => {
        if(key == product || value > 0) {
            productes.set(key, value - 1);
            if(value == 0) {
                productes.delete(key);
            }
        } else {
            alert("El producto no existe o el precio es incorrecto");
        }
    });
}