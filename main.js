"use strict";

function init() {
    keylistener()
}


function keylistener() {
    let knopf = document.querySelector('.eingabe')
    let eingabe = [];
    knopf.addEventListener('click', (e) => {
        let key = e.target;
        eingabe.push(key.dataset.value);
        let zahl = [eingabe.join("")]
        let action = key.dataset.action;
        let rechnung = [];
        console.log(eingabe);
        console.log(zahl);

        if (action === '+'){
            rechnung.push((zahl[0]));
            //let ergebnis = parseInt(zahl[0]) + parseInt(zahl[1]);
            console.log(rechnung);
        }

        
        /*
            (action === '-') ||
            (action === '*') ||
            (action === '/') ||
            (action === '=')) {
            console.log("Ein Operator wurde angeklickt");
        
        if (action === '.') {
            console.log("Komma wurde angeklickt");
        }
        if (action === 'clear') {
            action = "";
        } 
        if (!isNaN(zahl)){
            eingabe.push(zahl);
        }
        */
        updateDisplay(zahl)
        
    })

}


function updateDisplay(eingabe) {
    let anzeige = document.querySelector('#ergebnis');
    anzeige.innerHTML = eingabe;
}

init()