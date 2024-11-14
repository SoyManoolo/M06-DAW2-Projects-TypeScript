function carregarCookies() {

    let h1: HTMLHeadingElement = document.getElementById("header") as HTMLHeadingElement;
    let p: HTMLParagraphElement = document.getElementById("paragraph") as HTMLParagraphElement;

        if (localStorage.getItem("idioma") == "Castellano") {
            h1.innerHTML = "Texto en castellano";
            p.innerHTML = "Para ver los cambios, recarga la página.";
        } else if (localStorage.getItem("idioma") == "Catalan") {
            h1.innerHTML = "Text en català";
            p.innerHTML = "Per veure els canvis, actualitzar la pàgina.";
        } else if (localStorage.getItem("idioma") == "Ingles") {
            h1.innerHTML = "Text in english";
            p.innerHTML = "To see the changes, reload the page.";
        }

        let colorStorage: string = localStorage.getItem("fondo")!;
        document.body.style.backgroundColor = colorStorage;
}