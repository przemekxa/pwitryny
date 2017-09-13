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


function licz(a, b) {
    var a = document.getElementById("szerokosc").value;
    var b = document.getElementById("dlugosc").value;
    var pole = a * b;
    var elWyswietl = document.getElementById("wyswietl");
    elWyswietl.innerHTML = "Pole prostokąta: " + pole + "cm<sup>2</sup>";
}
