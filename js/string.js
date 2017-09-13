//document.write("DZIALA");

var text = 'ZSK - Zespół Szkół Komunikacji';

console.log(text.length);                   // ilość znaków

var pierwszy = text.charAt(0);              // pobieranie znaku o określonym indexie
console.log(pierwszy);                      // Z

var ostatni = text.charAt(text.length-1);   // pobieranie ostatniego znaku
console.log(ostatni);

console.log( text.charAt(11) );


//
// ASCII
//

console.log( text.charCodeAt(0) );          // pobieranie kodu ASCII znaku

var duze = text.toUpperCase();              // zamiana na duze litery
console.log(duze);

var male = text.toLowerCase();              // zamiana na małe litery
console.log(male);


var duzaMale =
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase();            // slice - odcinanie fragmentu
console.log(duzaMale);


var podaj = prompt("Podaj wartość");
var podajDuzeMale =
    podaj.charAt(0).toUpperCase() +
    podaj.slice(1).toLowerCase();
console.log( podajDuzeMale );
var elNaglowek = document.getElementById("naglowek");
elNaglowek.textContent = podajDuzeMale;


var podajSub =
    podaj.substr(1, podaj.length - 2);      // substr: od którego znaku, ile znakow

console.log( podajSub );
