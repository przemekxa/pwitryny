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


