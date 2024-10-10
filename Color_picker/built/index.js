"use strict";
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    let id = buttons[i].id;
    buttons[i].addEventListener("click", () => document.body.style.backgroundColor = id);
}
