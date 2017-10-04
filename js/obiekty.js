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
