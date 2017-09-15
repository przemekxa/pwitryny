//console.log("WORKS");

/*
Utwórz formularz z loginem (text) i hasłem (password).
Zapisz dane w tablicy. Wyświetl w nagłówku H2.
Użytkownik podaje również kolor w jakim tekst ma być wyświetlony.
*/


function show(f) {
    var data = [f.login.value, f.password.value, f.color.value];
    var elH2 = document.getElementById("nag");
    elH2.innerHTML = "Login: " + data[0] + "<br />Hasło: " + data[1];
    elH2.style.color = data[2];
    console.log(data);
}
