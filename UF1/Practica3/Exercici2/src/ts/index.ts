function modificarBom() {
    let num: number  = Number((document.getElementById("num") as HTMLInputElement).value);

    for (let i = 0; i < num; i++) {
        let newWindow = window.open("", "", "width=300,height=300");
        if (newWindow) {
            newWindow.document.write(`<h1>Window ${i + 1}</h1>`);
            newWindow.document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }
    }
}