/*

--> FLAGI:
g - global (do grup?)
i - nie zwracanie uwagi na wielkość liter

--> ZNAKI:
^ - początek regexa
$ - koniec regexa
+ - przynajmniej raz musi wystąpić
* - może wiele razy wystąpic (może być zero?)
? - może ale nie musi być
. - dowolny jeden znak (jak ? w innnych)
{} - zakres od do

--> ZNAKI SPECJALNE:
\s - spacja
\S - NIE spacja
\w - litery (duże i małe), cyfry, znak podkreślenia
\W - NIE litery (duże i małe), cyfry, znak podkreślenia
\d - cyfry
\D - NIE cyfry
\\ - backslash
\. - kropka


https://regex101.com/

*/

/*

var text = "Zespół Szkół Komunikacji";

var regex = /Szkół$/i;

var sprawdz = regex.test(text);     // true lub false - czy zgodne z wzorem
console.log(sprawdz);

var t2 = "a"
var reg2 = /[A-z]/;                 //bez zwracania uwagi na wielkość liter w zakresie
console.log( reg2.test(t2) );


console.log(  /[ą]/.test("ą")  );

console.log( /[ą]|[A-z]/.test("ą") );

console.log( /[A-z]\S/.test("ax ") );

console.log( /[A-z]+@/.test("a@") );

console.log( /[A-z]?@/.test("a@") );

console.log( /^mąk[a]?@+/.test("mąka@") );

console.log( /[a]/.test("aa") );

console.log( /[a]{3}/.test("aaxxaa") );

console.log( /[a]{3,4}/.test("aaaaa") );

console.log( /^[A-z]{3,}$/.test("aaaa") );

console.log( /\\/.test("\\") );

console.log( /\//.test("/") );

console.log( /./.test("/") );

console.log( /\./.test(".") );

console.log( /\.pl/.test(".pl") );

console.log( /\.[a-z]{2}/.test(".pl") );

console.log( /\w/.test(".pl") );

console.log( /^\w/.test(".pl") );

console.log( /^\W/.test("-") );

console.log( /^\d/.test("123") );

console.log( /^\D/.test("123") );

// GRUPY
console.log( /(text){2}/.test("texttext") );



// /^\d{2}-\d{3}$/      - kod pocztowy

*/

var reg_kod = /^\d{2}-\d{3}$/;
var elKod = document.getElementById("kod_pocztowy");
var elWynik = document.getElementById("wynik")

elKod.oninput = function() {
    if( reg_kod.test(elKod.value) ) {
        elWynik.textContent = "Kod wpisane poprawnie";
        elWynik.style.color = "green";
    } else {
        elWynik.textContent = "Kod wpisane niepoprawnie!";
        elWynik.style.color = "red";
    }
}


