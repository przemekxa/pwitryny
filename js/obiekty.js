//
// tworzenie obiektu za pomocą literału
// obiekty -> właściwości
//

var janusz = {
    wzrost: 190,
    waga: 79,
    miejsceUrodzenia: "Poznań",
    plec: "m"
};

console.log(janusz.wzrost);




var auto = {
    marka: "Tesla",
    model: "Model 3",
    predkosc: "200 km/h",
    wyswietl() {                // wyswietl: function() {

        document.write(
            this.marka + " " +
            this.model + "<br />Prędkość: " +
            this.predkosc
        );

    }
};

auto.wyswietl();                // wywoływanie metody



var ksiazka = {
    tytul: "Pan Tadeusz",
    rokWydania: 1834,
    gatunek: "poemat epicki",
    autor: {
        imie: "Adam",
        nazwisko: "Mickiewicz",
        wyswietl() { return this.imie + " " + this.nazwisko }
    }
}


// odwoływanie się do obiektu
console.log( ksiazka.autor.imie );
console.log( ksiazka["autor"]["imie"] );


var klucz = "nazwisko";
console.log(ksiazka.autor[klucz]);

console.log( ksiazka.autor.wyswietl() )






//
// tworzenie obiektu - drugi sposób
//


var produkt = {};

// sprawdzenie czy obiekt ma właściwość
console.log( typeof(produkt.nazwa) );           // undefined

// dodanie właściwość i metody do obiektu produkt
produkt.nazwa = "pralka";
produkt.firma = "Bosch";
produkt.model = "WLK-501";
produkt.waga = 8;
produkt.cena = 1500.00;
produkt.wyswietl = function() {
    return "Nazwa produktu: " + this.nazwa + "<br />" +
        "Firma: " + this.firma + "<br />" +
        "Model: " + this.model;
}

console.log( produkt );
document.write("<br /><br />" + produkt.wyswietl() )

console.log( typeof(produkt.wyswietl) );        // function





//
// tablice w obiekcie
//

var platnosci = {
    pokoj1: [50, 100, 200, 300, 50],
    pokoj2: [150, 300, 50, 250, 100],
    pokoj3: [350, 600, 100, 950],
    pokoj4: [550, 200, 100, 300, 350]
};

console.log(platnosci.pokoj1[0]);
console.log(platnosci.pokoj3.length);





/*

ZD

stwórz metodę, która wyświtli sumę wszystkich płatności
(ze wszystkich pokoi)

*/

function sumuj(tab) {
    var suma = 0;
    for(var i=0; i<tab.length; i++) { suma = suma + tab[i] };
    return suma;
}

platnosci.suma = function() {
    return sumuj(this.pokoj1) +
        sumuj(this.pokoj2) +
        sumuj(this.pokoj3) +
        sumuj(this.pokoj4)
}

console.log( platnosci.suma() );






//
// konstruktory
// !! z dużych liter
//

function Auto() {
    this.model = "Ferrari";
};

var samochod = new Auto();
console.log(samochod.model);


function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wyswietl = function() {
        return this.imie + " " + this.nazwisko;
    }
}

var jan = new Osoba("Jan", "Kowalski");
var anna = new Osoba("Anna", "Nowak");

console.log(jan);




var hotel = new Object();
hotel.nazwa = "Hotel Poznań";
hotel.pokoje = 100;
hotel.pokojeZarezerwowane = 30;
hotel.silownia = true;
hotel.rodzajePokoi = ["pojedynczy", "podwójny", "apartament"];
hotel.pokojeWolne = function() {
    return this.pokoje - this.pokojeZarezerwowane;
}

//console.log( hotel.pokojeWolne() );







//
// konstruktor obiektów
//


function Hotel(nazwa, pokoje, pokojeZarezerwowane) {
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.pokojeZarezerwowane = pokojeZarezerwowane;
    this.wolnePokoje = function() {
        return this.pokoje - this.pokojeZarezerwowane;
    };
}

var lech = new Hotel("Hotel Lech", 104, 20);
var merkury = new Hotel("Hotel Merkury", 39, 10);
//console.log( "Wolne pokoje w " + lech.nazwa + ": " + lech.wolnePokoje() );
//console.log( "Wolne pokoje w " + merkury.nazwa + ": " + merkury.wolnePokoje() );



//
// ZADANIE
// Utwórz konstruktor o nazwie pies i parametrach: imie, rasa, waga, ulubione zajęcia,
// które mogą mieć wiele wartości. Utwórz trzy obiekty o nazwach: Azor, Eddy, Saba
//



function Pies(imie, rasa, waga, zajecia) {
    this.imie = imie;
    this.rasa = rasa;
    this.waga = waga;
    this.zajecia = zajecia;
}

var azor = new Pies("Azor", "bokser", 10, ["spanie", "spacery"]);
var eddy = new Pies("Eddy", "labrador", 8, ["spanie", "spacery", "aportowanie"]);
var saba = new Pies("Saba", "bokser", 12, ["spanie", "bieganie"]);

var psy = [azor, eddy, saba];
eddy.zajecia.push("bieganie");

//console.log(eddy.zajecia);
//console.log(psy);

document.write("<br /><br /><br />");

for(var i=0; i<psy.length; i++) {
    var rozmiar;
    if(psy[i].waga > 10) rozmiar = "duży"; else rozmiar = "mały";
    document.write(
        "Pies <span style='color:red'>" +
        psy[i].imie + "</span> to " +
        rozmiar + " pies<br />");
}

document.write("<br /><br />");


for(e in eddy) {
    if(e == "imie" || e == "rasa") {
        document.write(eddy[e] + " ");
    }
}

var tab = ["Jan", "Nowak", "Poznań"];
for(i in tab) {
    console.log(tab[i]);
}

document.write("<br /><br />");






//
// prototype
//

function Pole(a, b, c, d) {
    return a*b;
}

console.log( Pole.length );
console.log( Pole.constructor );
console.log( Pole.prototype );


function Uczen(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
}

var adrian = new Uczen("Adrian", "Nowak");

Uczen.prototype.narodowosc = "polska";
Uczen.prototype.wyswietl = function() {
    return "<b>Imię:</b> " + this.imie +
        " <b>Nazwisko:</b> " + this.nazwisko +
        " <b>Narodowość:</b> " + this.narodowosc + "<br />";
}

document.write( adrian.wyswietl() );
console.log( adrian.constructor );
console.log( adrian.constructor.prototype.narodowosc );

console.log( adrian.hasOwnProperty("imie") );               // true - właściwość w konstruktorze
console.log( adrian.hasOwnProperty("narodowosc") );         // false - właściwość w prototype


//
// ZADANIE
// Utwórz konstruktor rower, w którtym będą właściwości marka, kolor.
// Wyświetl wszystkie dane za pomocą metody wyswieltRower. Wykorzystaj for in.
// Utwórz prototype, wktórym będzie zapisana ilość kół.
//


function Rower(marka, kolor) {
    this.marka = marka;
    this.kolor = kolor;
}

Rower.prototype.iloscKol = 2;
Rower.prototype.wyswietlRower = function() {
    for(i in this) {
        if(i != "wyswietlRower") document.write(this[i] + " ");
    }
}

var rowerowy = new Rower("Rowerowy", "czerwony");
console.log(rowerowy.iloscKol);
rowerowy.wyswietlRower();



