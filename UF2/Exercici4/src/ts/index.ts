let categories: Map<string, string> = new Map();
const divCategories:HTMLElement = document.getElementById("lista-categorias")!;

function addCategory() {
    let category: string = (document.getElementById("category")! as HTMLInputElement).value;
    categories.set("categoria", category);
    console.log(category + " se ha añadido correctamente");
}

function showCategories() {
    categories.forEach((key, value) => {
        divCategories.innerHTML += key + "<br>";
    });
    divCategories.innerHTML = [...categories].join("<br>");
}