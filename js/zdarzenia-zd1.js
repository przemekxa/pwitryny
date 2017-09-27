var pass1 = document.querySelectorAll("input")[0];
var pass2 = document.querySelectorAll("input")[1];
var div = document.querySelector("div");

// ZD
// User z klawiatury wpisuje w formularzu swoje hasło (w dwóch polach)
// Wykorzystaj zdarzenie onchange, które będzie w bloku wyświetlało
// czy hasła są takie same i mają minimum 5 znakó, a maksymalnie 12
// znaków
// (wpisywać na żywo, kiedy 1. to nic, a kiedy zaczyna drugie to
//  sprawdzać na żywo)


pass2.onkeyup = function() {
    var p1 = pass1.value;
    var p2 = pass2.value;
    if(p2.length < 5) {
        div.innerHTML = "Hasła muszą mieć co najmniej 5 znaków.";
    } else if(p2.length > 12) {
        div.innerHTML = "Hasła muszą mieć maksymalnie 12 pięć znaków.";
    } else if(p1 != p2) {
        div.innerHTML = "Hasła muszą być takie same.";
    } else {
        div.innerHTML = "<b>OK</b><br />Hasło: " + p2;
    }
}
