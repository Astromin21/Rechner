"use strict";

function init() {
    keylistener()
}


function keylistener() {
    let knopf = document.querySelector('.eingabe')
    knopf.addEventListener('click', (e) => {
        let key = e.target;
        let zahl = key.dataset.value;
        let action = key.dataset.action;

        if (action === "+")

        if (action === "-")

        if (action === "*")

        if (action === "/")
    })
}

function rechnen(){

}

function updateDisplay(action) {
    let anzeige = document.querySelector('#ergebnis');
    let eingabe = [];
    anzeige.innerHTML = eingabe;
}

init()