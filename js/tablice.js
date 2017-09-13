document.write("A");

//
// Literał tablicy
//

var kolory = ["czerwony", "zielony", "czarny"];
console.log( kolory[0] )

//
// Konstruktor array
//

var samochody = new Array("BMW", "Audi", "Tesla");
console.log(samochody[0]);



console.log(samochody[samochody.length-1])      // wyświetlanie ostatniego elementu tablicy

console.log(samochody.length);
console.log(samochody);

//samochody[0] = prompt("Podaj nazwę");
console.log(samochody);



//
// Tablica wielowymiarowa
//

var tab = new Array(
    new Array("Jan", "Nowak", "Poznań"),
    new Array("Janusz", "Kowal", "Gniezno"),
    new Array("Karol", "Kowalski", "Poznań")
);

console.log(tab[1][2]);


var imiona = ["Janusz", "Anna", "Krystyna", "Zenek"];
console.log(imiona);

var posortowane = imiona.sort();            // sortowanie
console.log(posortowane);

var odwrotnosc = imiona.reverse();          // odwracanie kolejności
console.log(odwrotnosc);


console.log(odwrotnosc.indexOf("KrystynaX"));   // pobieranie indeksu wartości
                                                // jeżeli nie ma -> -1

odwrotnosc.pop();                           // usuwanie ostatniego elementu
odwrotnosc.push("Ostatni");                 // dodawanie elementu na końcu
odwrotnosc.unshift("Pierwszy")              // dodawanie elementu na początku
console.log(odwrotnosc);

var liczby = [1, 2, 20, 190, -1, 1000000];
console.log(liczby);
liczby.sort( function(a, b) {
    return (a-b);                           // sortowanie liczb jako liczb
});
console.log(liczby);

/*
Utwórz formularz z loginem (text) i hasłem (password).
Zapisz dane w tablicy. Wyświetl w nagłówku H2.
Użytkownik podaje również kolor w jakim tekst ma być wyświetlony.
*/
