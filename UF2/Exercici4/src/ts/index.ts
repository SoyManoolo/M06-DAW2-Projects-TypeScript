let categories: Set<string> = new Set<string>();
const div:HTMLElement = document.getElementById("answer")!;

function addCategory() {
    let category: string = (document.getElementById("category")! as HTMLInputElement).value;
    categories.add(category);
    console.log(category + " se ha añadido correctamente");
}

function showCategories() {
    div.innerHTML = [...categories].join("<br>");
}