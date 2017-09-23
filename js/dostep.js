//
// DOSTĘP DO ELEMENTÓW
//


//
// getElementById()
// (zwraca pojedynczy element)
//

var elPierwszy = document.getElementById("pierwszy");
console.log(elPierwszy);

elPierwszy.className = "niebieski";


//
// getElementsByTagName()
// (zwraca wiele elementów)
//

elNaglowek = document.getElementsByTagName("h2");

if(elNaglowek.length > 0) {
    console.log(elNaglowek);
    elNaglowek[0].className = "niebieski";
}


//
// getElementsByClassName()
// (zwraca wiele elementów)
//

var elCzerwony = document.getElementsByClassName("czerwony");
if(elCzerwony.length > 0) {
    console.log(elCzerwony);
}

// metoda szybsza
var elOstatni = elCzerwony[elCzerwony.length-1];
elOstatni.className = "niebieski";

// metoda wolniejsza
//var elOstatni = elCzerwony.item(elCzerwony.length-1);
//elOstatni.className = "niebieski";



//
// getElementsByName()
// (zwraca wiele elementów)
//

var elAuto = document.getElementsByName("auto");
console.log(elAuto);
elAuto[1].className = "niebieski";



//
// querySelector()
// (zwraca pierwszą wartość)
//

var auto1 = document.querySelector("li.niebieski"); // element listy z klasą
auto1.className = "nieznany";


//
// querySelector()
// (zwraca wszystkie wartości)
//

var naglowek2 = document.querySelectorAll("h2");
naglowek2[1].className = "niebieski";


document.write("<button type='button' onclick='naCzerwony()'>Czerwony</button>");

function naCzerwony() {
    /*
    var elementy = document.getElementsByTagName("li");
    for (var i = 0; i<elementy.length; i++) {
        elementy[i].className = "czerwony";
    }
    */
    document.querySelectorAll("li").forEach(function(e, i) {
        e.className = "czerwony";
    })
}














