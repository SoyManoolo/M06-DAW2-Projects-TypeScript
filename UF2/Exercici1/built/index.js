"use strict";
let categories = new Map();
let productes = new Map();
function addTo() {
    const btnId = (event === null || event === void 0 ? void 0 : event.target).id;
    if (btnId == "addCategory") {
        let category = document.getElementById("category").value;
        categories.set(category, category);
        console.log(category + " se ha añadido correctamente");
    }
    else if (btnId == "addProduct") {
        let product = document.getElementById("product").value;
        let quant = parseInt(document.getElementById("cantidad").value);
        productes.set(product, quant);
        console.log(product + " " + quant + " se ha añadido correctamente");
    }
}
function show() {
    const btnId = (event === null || event === void 0 ? void 0 : event.target).id;
    if (btnId == "showCategories") {
        const divCategories = document.getElementById("listaCategorias");
        divCategories.innerHTML = "";
        categories.forEach((value, key) => {
            divCategories.innerHTML += value + "<br>";
        });
    }
    else if (btnId == "showProducts") {
        const divProductes = document.getElementById("listaProductos");
        divProductes.innerHTML = "";
        productes.forEach((value, key) => {
            divProductes.innerHTML += key + " " + value + "<br>";
        });
    }
}
function sale() {
    const product = document.getElementById("product").value;
    const price = parseInt(document.getElementById("price").value);
    productes.forEach((value, key) => {
        if (key == product || value > 0) {
            productes.set(key, value - 1);
            if (value == 0) {
                productes.delete(key);
            }
        }
        else {
            alert("El producto no existe o el precio es incorrecto");
        }
    });
}
