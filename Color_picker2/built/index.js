"use strict";
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    let value = buttons[i].value;
    let box = document.getElementById("box");
    buttons[i].addEventListener("click", () => box.style.backgroundColor = value);
}
