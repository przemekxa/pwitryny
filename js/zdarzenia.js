var imie = document.getElementById("imie");
var nazwisko = document.getElementById("nazwisko");
var login = document.getElementById("login");
var mail1 = document.getElementById("mail1");
var mail2 = document.getElementById("mail2");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var data = document.getElementById("data");
var regulamin = document.getElementById("regulamin");
var przycisk = document.getElementById("przycisk");
var popraw = document.getElementById("popraw");
var blok = document.getElementById("blok");


blok.style.color = "red";

//window.onload = function() {
//    alert("Witaj");
//}

//imie.onblur = sprawdz();


/*

function sprawdz() {
    if(imie.value.length >= 2 && this.value.length < 15) {
        blok.textContent = "";
        //imie.setAttribute("disabled", "");
    } else {
        blok.textContent = "Błędne dane";
    }
}

*/

function sprawdz() {
    var element = document.getElementById(this.id);
    if(element.value.length >= 2 && element.value.length < 15) {
        blok.textContent = "";
        this.disabled = true;
    } else {
        element.focus();
        blok.textContent = "Błędne dane";
    }
}


function mail() {
    if( mail1.value != mail2.value ) {
        blok.textContent = "Adresy poczty są różne";
        mail1.disabled = false;
        mail1.focus();
        mail1.value = "";
        mail2.value = "";
    } else {
        blok.textContent = "";
        this.disabled = true;
    }
}

function blokuj() { this.disabled = true; }


imie.addEventListener("blur", sprawdz);
nazwisko.addEventListener("blur", sprawdz);
login.addEventListener("blur", sprawdz);
mail1.addEventListener("blur", blokuj);
mail2.addEventListener("blur", mail);
