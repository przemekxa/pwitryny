//document.write("W");

//
// Math.sqrt
// pierwiastek kwadratowy
//

console.log(Math.sqrt(9));

//
// Wartość minimalna, maksymalna, zaokrąglenie
//

var a = 13.499;
var b = 28.5;
var minimalna = Math.min(a, b);             //zwracanie minimalnej wartości z dwoch
var maksymalna = Math.max(a, b);            //zwracanie maksymalnej wartości z dwoch
console.log(minimalna);
console.log(maksymalna);

var r = Math.round(a);
console.log(r);


//
// abs, round, floor
//

var x = -56;
var y = -13.1;
var z = 14.9;

document.write("<br />Math.abs()<br />")
document.write(Math.abs(x) + "<br />");
document.write(Math.abs(y) + "<br />");
document.write(Math.abs(z) + "<br />");

document.write("<br />Math.round()<br />")
document.write(Math.round(x) + "<br />");
document.write(Math.round(y) + "<br />");
document.write(Math.round(z) + "<br />");

document.write("<br />Math.floor()<br />")
document.write(Math.floor(x) + "<br />");
document.write(Math.floor(y) + "<br />");
document.write(Math.floor(z) + "<br />");



//
// Potęgowanie
//

var potega = Math.pow(2, 10);
console.log(potega);


//
// Losowanie
//

var random = Math.random();                         // losuje liczbę z zakresu od 0 do 1
console.log(random);

console.log( Math.floor( Math.random() *11 ) )      // losuje liczbę z przedziału (0 do 10>

