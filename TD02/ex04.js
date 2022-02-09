"use strict"

let circle = document.querySelector('.eevee');
let moveBy = 10;

window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});


window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
    }
    // Empêcher le keydown sur la fenêtre
    e.preventDefault(); 
});


// function leftArrow() {
//     var elem = document.getElementById("eevee");
//     element.style.left = parseInt(element.style.left) - 5 + "px";
// }

// function rightArrow() {
//     var elem = document.getElementById("eevee");
//     element.style.right = parseInt(element.style.right) - 5 + "px";
// }

// function upArrow() {
//     var element = document.getElementById("eevee");
//     element.style.top = parseInt(element.style.top) - 5 + 'px';
// }

// function downArrow() {
//     var element = document.getElementById("eevee");
//     element.style.bottom = parseInt(element.style.bottom) - 5 + 'px';
// }

// function moveSelection(event) {
//     switch (event.keyCode) {
//         case 1:
//             leftArrow();
//             break;

//         case 2:
//             rightArrow();
//             break;

//         case 3:
//             upArrow();
//             break;

//         case 4:
//             downArrow();
//             break;
//     }
// };

// function gameLoop() {
//     // change position based on speed
//     moveSelection();
//     setTimeout("gameLoop()", 10);
// }