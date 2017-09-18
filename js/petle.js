//document.write("A");

//
// Pętla for
//

for (var i = 0; i<10; i++) {
    document.write(i);
    if(i==6) {
        break;
    }
}

document.write("<br /><br />");

// ZAD wylosuj 10 liczb z przedziału od 10 do 100

for(var i=0; i<10; i++) {
    var l = Math.floor( Math.random() * 91 +10 );
    document.write(l + "<br />");
}

document.write("<br /><br />");

for(var i=0; i<10; i++) {
    if(i == 0) {
        document.write(i+1 + " raz<br />");
    } else {
        document.write(i+1 + " razy<br />");
    }
}

document.write("<br /><br />");



// ZAD user podaje wartość pocz. i kon. pętli, po kazdej dodaje przecinek, po ostatniej kropke. Pierwsza liczba mniejsza od drugiej.

/*

var a = parseInt(prompt("Podaj 1. liczbę"));
var b = parseInt(prompt("Podaj 2. liczbę", a+4));

while(a>=b) {
    alert("Druga liczba musi być większa od pierwszej")
    a = parseInt(prompt("Podaj 1. liczbę"));
    b = parseInt(prompt("Podaj 2. liczbę", a+10));
}

for(var i=a; i<=b; i++) {
    if(i != b) {
        document.write(i+",<br />");
    } else {
        document.write(i+".<br />");
    }
}
*/

document.write("<br /><br />");





//
// pętla while
//


var i = 0;
while(i++ < 5) {
    document.write(i + "<br />");
}

document.write("<br /><br />");

/*

var x = 0;
var y = 0;

while(x >= y) {
    x = Number(prompt("Podaj x"));
    y = Number(prompt("Podaj y"));
}
document.write("Podałeś poprawne wartości:<br />" +
               "x=" + x + ", y=" + y + "<br />");

*/






//
// pętla do-while
//


/*

do {
    var wiek = prompt("Podaj wiek");
    if(wiek == 18) {
        document.write("Masz 18 lat.");
    }
} while (wiek != 18);

*/






// ZAD wykorzytaj pętle for i do-while. Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl w konsoli (można całą tablicę).

/*

var podzielne = new Array();


for(var i=0; i<5; i++) {

    do {
        podzielne[i] = parseInt(prompt("Podaj " + (i+1) + ". liczbę podzielną przez 2"));
    } while (podzielne[i]%2 != 0);

}

console.log(podzielne);

*/





//ZAD użytkownik podaje z klawiatury liczbę. Zabezpiecz przed podaniem litery, znaku specjalnego.


document.write("<input type='text' id='liczba'>");
document.write("<button type='button' id='przycisk'>Wyślij</button>");

var elPrzycisk = document.getElementById("przycisk");
var elLiczba = document.getElementById("liczba");

elPrzycisk.onclick = function() {
    var wartosc = elLiczba.value;
    if( !isNaN(wartosc) ) {
        console.log(wartosc);
    }
}
document.write("<br /><br /><br />");






//ZAD program wtświetlający liczby od 1 do 10 w pięciu rzędach. Po każdej liczbie ma być przecinek, a po ostatniej w każdym rzędzie ma być kropka.

for(var i=0; i<5; i++) {

    for(var j=1; j<=10; j++) {

        if(j != 10) {
            document.write(j + ", ");
        } else {
            document.write(j + ".<br />");
        }

    }

}
document.write("<br /><br />");





//ZAD choinka

for(var i=1; i<20; i++) {
    for(var j=0; j<i; j++) {
        document.write("*");
    }
    document.write("<br />");
}


document.write("<br /><br />");






//
// pętla for-each
//
