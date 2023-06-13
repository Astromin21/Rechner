"use strict";

let zahlen = [];

//---------------------Listerner + Abfrage Operator------------------------------------------------
function keylistener() {
    let knopf = document.querySelector('.eingabe')
    let eingabe = [];

    knopf.addEventListener('click', (e) => {
        let key = e.target; if (operator === '=') {
            updateDisplay(zahlen[0]);
            zahlen = [zahlen[0]];
        }
        eingabe.push(key.dataset.value);
        let zahl = [eingabe.join("")];
        let operator = key.dataset.action;
        let comma = key.dataset.float;
        //console.log(zahl);
        updateDisplay(zahl);

        if (comma === 'comma') {
            eingabe.push('.');
            zahl = [eingabe.join("")];
            updateDisplay(zahl);
            comma = '';
        }
        if (!operator == "") {
            zahlen.push(zahl);
            eingabe = [];
            console.log("zahlenkeylist", zahlen,);
        }
        if (operator == 'clear') {
            zahlen = [];
            zahl = [];
            operator = "";
            updateDisplay(zahl);
        }
        if (zahlen.length >= 3) {
            speicher();
        }
        if (operator === '=') {
            updateDisplay(zahlen[0]);
            zahlen = [zahlen[0]];
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
    //console.log("erg", zahlen);
    updateDisplay(erg);
}
//---------------------Rechnen----------------------------------------------------------------------
function rechnen(zahl1, zahl2, operator) {
    if (operator == '+') {
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

keylistener()