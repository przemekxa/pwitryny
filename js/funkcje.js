//document.write("WORKS");

function witaj() {
    document.write("Witaj " + name + "<br />");
}

var name = "Janusz";
witaj(name);

function poleProstokata(a, b) {
    var pole = a * b;
    return pole;
}

document.write(poleProstokata(3, 4) + "cm<sup>2</sup>");

var btnLicz = document.getElementById("btnLicz");
btnLicz.onclick = licz;

function licz() {
    var a = document.getElementById("szerokosc").value;
    var b = document.getElementById("dlugosc").value;
    var pole = a * b;
    var elWyswietl = document.getElementById("wyswietl");
    elWyswietl.innerHTML = "Pole prostokąta: " + pole + "cm<sup>2</sup>";
}

function poleObjetosc(szer, dl, wys) {
    var pole = szer * dl;
    var obj = pole * wys;
    return [pole, obj];
}

console.log(poleObjetosc(3, 4, 5));

var pole = poleObjetosc(3, 4, 10)[0];
var obj = poleObjetosc(3, 4, 19)[1];
console.log(pole);
console.log(obj);


//var x = prompt("Wybierz: 0 - pole, 1 - objętość:");
//console.log(poleObjetosc(1,2,3)[x]);


console.log(Math.PI);
