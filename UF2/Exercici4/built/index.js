"use strict";
let categories = new Set();
const div = document.getElementById("answer");
function addCategory() {
    let category = document.getElementById("category").value;
    categories.add(category);
    console.log(category + " se ha añadido correctamente");
}
function showCategories() {
    div.innerHTML = [...categories].join("<br>");
}
