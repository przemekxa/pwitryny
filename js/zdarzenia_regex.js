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

function blokujMail() {
    blok.textContent = "";
    this.disabled = true;
    mail2.disabled = false;
    mail2.focus();
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

function blokujPass() {
    blok.textContent = "";
    this.disabled = true;
    pass2.disabled = false;
    pass2.focus();
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



imie.addEventListener("blur", sprawdz);
nazwisko.addEventListener("blur", sprawdz);
login.addEventListener("blur", sprawdz);
mail1.addEventListener("blur", blokujMail);
mail2.addEventListener("blur", mail);
pass1.addEventListener("blur", blokujPass);
pass2.addEventListener("blur", pass);
regulamin.addEventListener("change", sprawdzRegulamin);
popraw.addEventListener("click", poprawDane);
przycisk.addEventListener("click", wypiszDane);
