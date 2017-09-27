var auta = document.getElementById("auta");
var ulubione = document.getElementById("ulubione")

function mojeAuto() {
    ulubione.textContent = auta.value;
}

auta.onchange = mojeAuto;

// ZD
// User z klawiatury wpisuje w formularzu swoje hasło (w dwóch polach)
// Wykorzystaj zdarzenie onchange, które będzie w bloku wyświetlało
// czy hasła są takie same i mają minimum 5 znakó, a maksymalnie 12
// znaków
// (wpisywać na żywo, kiedy 1. to nic, a kiedy zaczyna drugie to
//  sprawdzać na żywo)
