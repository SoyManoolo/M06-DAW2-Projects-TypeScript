const display = document.querySelector<HTMLInputElement>("#display")!;
const buttons = document.querySelectorAll<HTMLButtonElement>("button");

let delAll: boolean = false;

if (display) {
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {

            let cadena: string = display.value;
            let ultimocaracter: string = cadena[cadena.length -1];

            if (btn.id == "%") {
                let numerotext: string = cadena.substring(0, cadena.length);
                let numero: number = +numerotext / 100;
                display.value = numero.toString();
                delAll = true;
            } else if (btn.id == "=") {
                try {
                    display.value = eval(display.value); 
                    delAll = true;
                } catch (error) {
                    display.value = "Error";
                    delAll = true;
                }
            } else if (btn.id == "ac") {
                display.value = "";
                delAll = false;
            } else if (btn.id == "del") {
                if(delAll) {
                    display.value = "";
                    delAll = false;
                } else {
                    display.value = display.value.slice(0, -1);
                }
            } else if(btn.value){
                delAll = false;
                display.value += btn.value;
            } else if(delAll){
                display.value = btn.id;
                delAll = false;
            } else {
                display.value += btn.id;
                delAll = false
            }
        })
    })
}
