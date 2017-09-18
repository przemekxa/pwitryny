// E.14-01-15.01
// 2015 zima

var el1 = document.getElementById("liczba1");
var el2 = document.getElementById("liczba2");

var elDodaj = document.getElementById("dodaj");
var elOdejmij = document.getElementById("odejmij");
var elMnoz = document.getElementById("mnoz");
var elDziel = document.getElementById("dziel");

var elWynik = document.getElementById("wynik");


function polaOK() {
    if(el1.value == "" || el2.value == ""){
        elWynik.innerHTML = "Proszę uzupełnić obie liczby.";
        return false;
    }
    else return true;
}

elDodaj.onclick = function() {
    if(polaOK()) {
        elWynik.innerHTML = Number(el1.value) + Number(el2.value);
    }
}

elOdejmij.onclick = function() {
    if(polaOK()) {
        elWynik.innerHTML = Number(el1.value) - Number(el2.value);
    }
}

elMnoz.onclick = function() {
    if(polaOK()) {
        elWynik.innerHTML = Number(el1.value) * Number(el2.value);
    }
}

elDziel.onclick = function() {
    if(polaOK()) {
        if(Number(el2.value) == 0) {
            elWynik.innerHTML = "Nie można dzielić przez 0."
        } else {
            elWynik.innerHTML = Number(el1.value) / Number(el2.value);
        }
    }
}




var elPodstawa = document.getElementById("podstawa");
var elWykladnik = document.getElementById("wykladnik");
var elPotegtowanie = document.getElementById("potegowanie");
var elWynik2 = document.getElementById("wynik2");

elPotegtowanie.onclick = function() {
    var a = elPodstawa.value;
    var b = elWykladnik.value;
    if(!isNaN(a) && !isNaN(b) && a!= "" && b !="") {
        a = Number(a);
        b = Number(b);
        if(b>0) {
            elWynik2.innerHTML = "Wynik działania wynosi: " + Math.pow(a, b);
        } else {
            elWynik2.innerHTML = "Wykładnik potęgi musi być dodatni.";
        }

    } else {
        elWynik2.innerHTML = "Wpisz podstawę i wykładnik potęgi.";
    }
}


