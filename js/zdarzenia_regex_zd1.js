/*

ZD

User podaje z klawiatury nazwy zdjęć z rozszerzeniami.
Nazwy nie mogą mieć cyfr, mogą być pisane tylko małymi literami
oraz nie mogą mieć znaków specjalnych oprócz kropki.
Wszystkie zdjęcia z rozszerzeniem .jpg zapisz w tablicy o nazwie
jpg, a zdjęcia z .bmp w tablicy bmp. Posortuj tablicę rosnąco
i wyświetl na ekranie zawartość.

Podaje w formularzu; rozdziela spacjami.

*/


var btnSprawdz = document.getElementById("sprawdz");
var divWyniki = document.getElementById("wynik");
var txtPliki = document.getElementById("pliki");

var regJpg = /[a-z.]+.jpg/g;
var regBmp = /[a-z.]+.bmp/g;

btnSprawdz.onclick = function() {

    var pliki = txtPliki.value;

    var jpg = pliki.match(regJpg);
    var bmp = pliki.match(regBmp);
    if(jpg != null) jpg.sort();
    if(bmp != null) bmp.sort();

    divWyniki.innerHTML =
        wypisz("Pliki .jpg", jpg) +
        "<br />" +
        wypisz("Pliki .bmp", bmp);

}


function wypisz(header, tab) {
    if (tab != null) {
        var s = "<b>" + header + "</b><ul>";
        for(var i=0; i<tab.length; i++) {
            s += "<li>" + tab[i] + "</li>";
        }
        s += "</ul>";
        return s;
    } else return "";

}

