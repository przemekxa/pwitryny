//document.write("W");

//Napisać skrypt który oblicza obwód, pole oraz objętość stożka. Dane user podaje z klawiatury, wykorzystaj obiekt Math. Użytkownik wybiera za pomocą pola radio co chce obliczyć. Dane wprowadza w formularzu. Wynik wyświetl w bloku.

var wynik = document.getElementById("wynik");

function licz(f) {
    var promien = f.promien.value;
    var wysokosc = f.wysokosc.value;
    var typ = f.typ.value;

    if(promien != "" && wysokosc != "" && typ != "") {
        promien = parseFloat(promien);
        wysokosc = parseFloat(wysokosc);
        switch (typ) {
            case "obwod":
                wynik.innerHTML = "Obwód podstawy: " + 2 * promien * Math.PI;
                break;
            case "pole":
                var l = Math.sqrt( Math.pow(promien, 2) + Math.pow(wysokosc, 2) );
                wynik.innerHTML = "Pole powierzchni całkowitej: " + promien * Math.PI * ( promien + l );
                break;
            case "objetosc":
                wynik.innerHTML = "Objętość: " + promien * promien * Math.PI * wysokosc / 3;
                break;
        }
    } else {
        alert("Wprowadź wszystkie dane!")
    }
}
