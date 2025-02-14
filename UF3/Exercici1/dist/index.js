"use strict";
const barcelona = document.getElementById("barcelona");
const madrid = document.getElementById("madrid");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const orange = document.getElementById("orange");
const brown = document.getElementById("brown");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
madrid.addEventListener("click", add);
madrid.addEventListener("mouseenter", add);
madrid.addEventListener("auxclick", add);
barcelona.addEventListener("click", add);
barcelona.addEventListener("mouseleave", add);
barcelona.addEventListener("auxclick", add);
document.body.addEventListener("keypress", add);
document.body.addEventListener("dblclick", add);
let redCounter = 0;
let orangeCounter = 0;
let brownCounter = 0;
let purpleCounter = 0;
let blueCounter = 0;
function add(event) {
    const target = event.target;
    if (event.type == "click") {
        if (target.id == "madrid") {
            orangeCounter++;
            orange.innerHTML = orangeCounter.toString();
        }
        else {
            redCounter++;
            red.innerHTML = redCounter.toString();
        }
    }
    else if (event.type == "mouseleave") {
        purpleCounter++;
        purple.innerHTML = purpleCounter.toString();
    }
    else if (event.type == "mouseenter") {
        brownCounter++;
        brown.innerHTML = brownCounter.toString();
    }
    else if (event.type == "dblclick") {
        blueCounter++;
        blue.innerHTML = blueCounter.toString();
    }
    else if (event.type == "keypress") {
        const keyEvent = event;
        if (keyEvent.key == "0") {
            green.innerHTML = "";
        }
        ;
        green.innerHTML += keyEvent.key;
    }
    else if (event.type == "auxclick") {
        if (target.id == "madrid") {
            orangeCounter--;
            orange.innerHTML = orangeCounter.toString();
        }
        else {
            redCounter--;
            red.innerHTML = redCounter.toString();
        }
    }
}
