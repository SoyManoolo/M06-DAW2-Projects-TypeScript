const boton: HTMLButtonElement = document.getElementById("boton") as HTMLButtonElement;
const lista: HTMLUListElement = document.getElementById("lista") as HTMLUListElement;
let contador = 0;

boton.addEventListener('click', () => {
    lista.innerHTML += `<li> ${contador} </li>`;
    contador ++;
})