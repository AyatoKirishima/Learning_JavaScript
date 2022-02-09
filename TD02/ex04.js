"use strict"

let eevee = document.querySelector('.eevee');
let moveBy = 10;

window.addEventListener('load', () => {
    eevee.style.position = 'absolute';
    eevee.style.left = 0;
    eevee.style.top = 0;
});

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            eevee.style.left = parseInt(eevee.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            eevee.style.left = parseInt(eevee.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            eevee.style.top = parseInt(eevee.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            eevee.style.top = parseInt(eevee.style.top) + moveBy + 'px';
            break;
    }
    // Empêcher le keydown sur la fenêtre
    e.preventDefault();
});