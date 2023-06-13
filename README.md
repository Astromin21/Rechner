### Rechner mit Eingabe per Click ###

- Rechner mit Plus-, Minus-, Division- und Multiplikationfunktion
- Gerechnet kann mit Ganz- und Kommazahlen
- Gecleared wird mit dem Button 'AC'

```
keylistener()
```
- erkennt welcher Knopf im html geclickt wurde
- erkennt Ende der Zahl Eingabe und übernimmt zahl1 und zahl2 in array zahlen
- überprüft Eingabe der Operatoren


```
speicher()
```
- wandelt Zahlen in float um
- ändert array(zahlen) um und fügt Ergebnis der Rechnung als Index[0] hinzu für weiteres Rechnen


```
rechnen()
```
- überprüft Rechenoperator und returned Ergebnis der Rechnung and speicher()


```
updateDisplay()
```
- übergibt eingegebene Zahlen and html und Zeigt diese an