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

var regImie = /^[A-z]{2,16}$/;
var regNazwisko = /^[A-z]{2,30}(\-[A-z]{2,30})?$/;
var regLogin = /^(\w|\W){4,25}$/;
var regMail = /^[A-z](\w|\.|\-){0,20}@(\w{1,20}\.){1,3}[A-z]{1,3}$/;
var regPass = /^((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\W|_]).{8,20}$)/;

function sprawdzImie() {
    if(regImie.test(imie.value)) {
        blok.textContent = "";
        imie.disabled = true;
    } else {
        imie.focus();
        blok.textContent = "Wpisz poprawne imię";
    }
}

function sprawdzNazwisko() {
    if(regNazwisko.test(nazwisko.value)) {
        blok.textContent = "";
        nazwisko.disabled = true;
    } else {
        nazwisko.focus();
        blok.textContent = "Wpisz poprawne nazwisko";
    }
}

function sprawdzLogin() {
    if(regLogin.test(login.value)) {
        blok.textContent = "";
        login.disabled = true;
    } else {
        login.focus();
        blok.textContent = "Wpisz poprawny login";
    }
}

function blokujMail() {

    if(regMail.test(mail1.value)) {
        blok.textContent = "";
        this.disabled = true;
        mail2.disabled = false;
        mail2.focus();
    } else {
        mail1.focus();
        blok.textContent = "Wpisz poprawny adres email";
    }


}


function mail() {
    if( mail1.value != mail2.value ) {
        blok.textContent = "Adresy poczty były różne";
        mail1.disabled = false;
        mail2.disabled = true;
        mail1.focus();
        mail1.value = "";
        mail2.value = "";
    } else {
        blok.textContent = "";
        this.disabled = true;
    }
}



function blokujPass() {
    if(regPass.test(pass1.value)){
        blok.textContent = "";
        this.disabled = true;
        pass2.disabled = false;
        pass2.focus()
        ;
    } else {
        pass1.focus();
        blok.textContent = "Wpisz poprawnie hasło";
    }
}

function pass() {
    if( pass1.value != pass2.value ) {
        blok.textContent = "Hasła były różne";
        pass1.disabled = false;
        pass2.disabled = true;
        pass1.focus();
        pass1.value = "";
        pass2.value = "";
    } else {
        blok.textContent = "";
        this.disabled = true;
    }
}



function sprawdzRegulamin() {
    if(regulamin.checked) przycisk.disabled = false;
    else przycisk.disabled = true;
}

function poprawDane() {
    var inputs = document.querySelectorAll("input");
    if(inputs.length > 0) {
        for(var i=0; i<inputs.length; i++) {
            if(inputs[i].disabled) inputs[i].disabled = false;
        }
        console.log(inputs);
    }
}

function wypiszDane() {

    var puste = false;
    var inputs = document.querySelectorAll("input");

    for(var i=0; i<inputs.length-1; i++) {
        if(inputs[i].value == "") {
            puste = true;
            break;
        }
    }

    if(puste) {
        blok.textContent = "Musisz wypełnić wszystkie pola!"
    } else {
        f = document.querySelector("form");
        f.style.display = "none";
        var akceptacja = (regulamin.checked) ? "tak" : "nie";
        var dane =
            "<b>Imię:</b> " + imie.value + "<br />" +
            "<b>Nazwisko:</b> " + nazwisko.value + "<br />" +
            "<b>Login:</b> " + login.value + "<br />" +
            "<b>E-mail:</b> " + mail1.value + "<br />" +
            "<b>Hasło:</b> " + pass1.value + "<br />" +
            "<b>Data urodzenia:</b> " + data.value + "<br />" +
            "<b>Akceptacja regulaminu:</b> " + akceptacja + "<br />";

        document.write(dane);
    }
}



imie.addEventListener("blur", sprawdzImie);
nazwisko.addEventListener("blur", sprawdzNazwisko);
login.addEventListener("blur", sprawdzLogin);
mail1.addEventListener("blur", blokujMail);
mail2.addEventListener("blur", mail);
pass1.addEventListener("blur", blokujPass);
pass2.addEventListener("blur", pass);
regulamin.addEventListener("change", sprawdzRegulamin);
popraw.addEventListener("click", poprawDane);
przycisk.addEventListener("click", wypiszDane);




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
