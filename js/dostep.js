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



var elPrzycisk = document.getElementById("przycisk");

var klub = document.getElementsByName("sport");

elPrzycisk.onclick = function() {
    console.log(klub);

    //for(var i=0; i<klub.length; i++) {
    //    klub[i].className = "niebieski";
    //}

    klub.forEach( function(e, index) {
        e.className = "niebieski";
    })
}




//
// previousElementSibling
// nextElementSibling
//

// previousSibling - liczy spacje, entery, taby itd.

var poczatkowy = document.getElementById("s2");
var poprzedni = poczatkowy.previousElementSibling;
var nastepny = poczatkowy.nextElementSibling;

poczatkowy.className = "niebieski";
poprzedni.className = "niebieski";
nastepny.classList = "niebieski";


//
// firstElementChild
// lastElementChild
//
// !! bez Element liczy sppacje, entery, taby itd.
//


var lista = document.getElementsByTagName("ul")[1];

var pierwszy = lista.firstElementChild;
pierwszy.setAttribute("class", "czerwony");

// setAttbibute - ustaw HTMLowy atrybut

var ostatni = lista.lastElementChild;
ostatni.setAttribute("class", "czerwony");





//
// FORMULARZ
//
// Zmien 1. element input na button
//

var formularz = document.getElementsByTagName("form")[0];
var input0 = formularz.firstElementChild;
input0.setAttribute("type", "button");
input0.setAttribute("value", "Wyślij");

