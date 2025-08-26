// Holt das Eingabefeld mit der ID "display" und speichert es in der Variable 'display'
// Damit können wir später den Wert des Displays lesen oder ändern
var display = document.getElementById("display");

// Fügt das übergebene 'input' (Zahl, Operator, etc.) an das Ende des aktuellen Display-Inhalts an
function appendToDisplay(input) {
    // Beispiel: Wenn display.value = "12" und input = "3", wird daraus "123"
    display.value += input;
}

// Führt die Berechnung des eingegebenen Ausdrucks im Display durch
function calculate() {
    // 'eval()' wertet einen String als mathematischen Ausdruck aus
    // Beispiel: "3+4*2" wird zu 11
    display.value = eval(display.value);

    // Hinweis: eval() ist mächtig, aber potentiell unsicher,
    // da damit beliebiger JS-Code ausgeführt werden kann.
    // In einem echten Projekt sollte man eval vermeiden oder absichern.
}

// Setzt das Display zurück, also löscht den kompletten Inhalt
function clearDisplay(){
    // Achtung: Hier war ein Leerzeichen statt einem leeren String ("")
    // Korrektur wäre: display.value = "";
    display.value = "";
}

// Löscht das letzte Zeichen im Display (wie eine Rücktaste)
function clearOne(){
    // slice(0, -1) entfernt das letzte Zeichen vom String
    // Beispiel: "123" -> "12"
    display.value = display.value.slice(0, -1);
}

function appendPercent() {
    display.value += "/100";
}

