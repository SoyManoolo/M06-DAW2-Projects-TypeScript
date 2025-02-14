const barcelona: HTMLImageElement = document.getElementById("barcelona") as HTMLImageElement;
const madrid: HTMLImageElement = document.getElementById("madrid") as HTMLImageElement;
const red: HTMLDivElement = document.getElementById("red") as HTMLDivElement;
const blue: HTMLDivElement = document.getElementById("blue") as HTMLDivElement;
const orange: HTMLDivElement = document.getElementById("orange") as HTMLDivElement;
const brown: HTMLDivElement = document.getElementById("brown") as HTMLDivElement;
const purple: HTMLDivElement = document.getElementById("purple") as HTMLDivElement;
const green: HTMLDivElement = document.getElementById("green") as HTMLDivElement;

madrid.addEventListener("click", add);
madrid.addEventListener("mouseenter", add);
madrid.addEventListener("auxclick", add);
barcelona.addEventListener("click", add);
barcelona.addEventListener("mouseleave", add);
barcelona.addEventListener("auxclick", add);


document.body.addEventListener("keypress", add);
document.body.addEventListener("dblclick", add);

let redCounter: number = 0;
let orangeCounter: number = 0;
let brownCounter: number = 0;
let purpleCounter: number = 0;
let blueCounter: number = 0;

function add (event: Event):void {
    const target: HTMLElement = event.target as HTMLElement;
    if (event.type == "click") {
        if (target.id == "madrid") {
            orangeCounter++ ;
            orange.innerHTML = orangeCounter.toString();
        } else {
            redCounter++ ;
            red.innerHTML = redCounter.toString();
        }
    } else if (event.type == "mouseleave") {
        purpleCounter++ ;
        purple.innerHTML = purpleCounter.toString();
    } else if (event.type == "mouseenter") {
        brownCounter++ ;
        brown.innerHTML = brownCounter.toString();
    } else if (event.type == "dblclick") {
        blueCounter++ ;
        blue.innerHTML = blueCounter.toString();
    } else if (event.type == "keypress") {
        const keyEvent: KeyboardEvent = event as KeyboardEvent;
        if (keyEvent.key == "0") {
            green.innerHTML = "";
        };
        green.innerHTML += keyEvent.key;
    } else if (event.type == "auxclick") {
        if (target.id == "madrid") {
            orangeCounter-- ;
            orange.innerHTML = orangeCounter.toString();
        } else {
            redCounter-- ;
            red.innerHTML = redCounter.toString();
        }
    }
}
