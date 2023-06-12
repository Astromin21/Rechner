"use strict";

let zahlen = [];

function init() {
    keylistener()
}
//---------------------Listerner + Abfrage Operator------------------------------------------------
function keylistener() {
    let knopf = document.querySelector('.eingabe')
    let eingabe = [];

    knopf.addEventListener('click', (e) => {
        let key = e.target;
        eingabe.push(key.dataset.value);
        let zahl = [eingabe.join("")];
        zahl = parseInt(zahl)
        let operator = key.dataset.action;

        console.log(zahl);

        updateDisplay(zahl);

        if (!operator == "") {
            zahlen.push(zahl);
            eingabe = [];
            console.log("zahlenkeylist", zahlen,);
        }
        if (zahlen.length >= 3) {
            speicher();
        }
        if(operator == '='){
            console.log('fertig', zahlen[0]);
        } else if (operator) {
            zahlen.push(operator); 
        }   
    })
}
//---------------------Eingabespeicher + Rechenstart------------------------------------------------
function speicher() {
    let zahl1 = parseFloat(zahlen[0]);
    let operator = zahlen[1]        

    let zahl2 = parseFloat(zahlen[2]);

    let erg = rechnen(zahl1, zahl2, operator)
    zahlen = [erg]
    console.log("erg", zahlen);
    updateDisplay(erg);

}
//---------------------Rechnen----------------------------------------------------------------------
function rechnen(zahl1, zahl2, operator) {

    if (operator == '+') {
        console.log("rechnet");
        return zahl1 + zahl2
    }
    if (operator == '-') {
        return zahl1 - zahl2
    }
    if (operator == '*') {
        return zahl1 * zahl2
    }
    if (operator == '/') {
        return zahl1 / zahl2
    }

}
//---------------------Display Ausgabe----------------------------------------------------------------------       

function updateDisplay(eingabe) {
    let anzeige = document.querySelector('#ergebnis');
    anzeige.innerHTML = eingabe;
}

init()