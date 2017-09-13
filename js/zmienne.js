//document.write("TEST")

var zmienna = 'Janusz';
var nazwisko;

nazwisko = 'Nowak';

//document.write('Imię: ' + zmienna + '<br />Nazwisko: ' + nazwisko);

var wiek1 = 19;
var wiek2 = 20;

var sredniWiek = (wiek1 + wiek2) / 2;     //Camel case

console.log('Średni wiek wynosi ' + sredniWiek);


//alert('Średni wiek: ' + sredniWiek);

var a = 5, b = '3';

var suma = a + b;
console.log(suma);
console.log(10 - '20' + 30);    // 20
console.log(10 + '20' + 30);    // '102030'



var c = 10, d = 2.5;
console.log( typeof(c) );
console.log( typeof(zmienna) );

var log = true;
console.log( typeof(log) );

var x = null;
var y;
console.log( typeof(x) );       // object
console.log( typeof(y) );       // undefined


var dziesietna = 020;           // liczba ósemkowa: 0 i liczba
console.log(dziesietna);

var hex = 0x20;                 // liczba szesnastkowa: 0x i liczba
console.log(hex);

console.trace();                // wskazuje w jakim pliku jesteśmy



// w nazwie zmiennej nie może być myślnika
// na początku nazwy może być: $, _, litera (cyfry tylko w środku)


var name = 'Anna';
console.log( typeof(name) );

name = parseInt(name);
console.log( name );            // NaN

var j = '1';
j = parseInt(j);
console.log(j);                 // 1 parseInt


var k = '3.9999999999';
k = parseFloat(k);
console.log(k);                 // 3,9999999999 parseFloat


var age1 = parseInt( prompt('Podaj wiek 1') );
var age2 = parseInt( prompt('Podaj wiek 2') );

console.log( typeof(age1) );

var wynik = ( age1 + age2 ) / 2

console.log(wynik);

document.getElementById("naglowek").innerHTML = wynik;

var elNaglowek = document.getElementById("naglowek");
elNaglowek.innerHTML = wynik;
elNaglowek.style.color = prompt('Podaj kolor', 'na przykład: red, blue, yellow');





