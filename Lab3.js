// Daphne Kramer
// Applicatie ontwikkelaar


//opdracht 1
document.write("opdracht 1"+"<br/>"+"<br/>");
var tafel6 = 6;

document.write("1 x "+ tafel6 + " = " + tafel6 +"<br/>");
document.write("2 x "+ tafel6 + " = " + tafel6*2+"<br/>");
document.write("3 x "+ tafel6 + " = " + tafel6*3+"<br/>");
document.write("4 x "+ tafel6 + " = " + tafel6*4+"<br/>");
document.write("5 x "+ tafel6 + " = " + tafel6*5+"<br/>");
document.write("6 x "+ tafel6 + " = " + tafel6*6+"<br/>");
document.write("7 x "+ tafel6 + " = " + tafel6*7+"<br/>");
document.write("8 x "+ tafel6 + " = " + tafel6*8+"<br/>");
document.write("9 x "+ tafel6 + " = " + tafel6*9+"<br/>");
document.write("10 x "+ tafel6 + " = " + tafel6*10+"<br/>"+"<br/>");

//opdracht 2
document.write("opdracht 2"+"<br/>"+"<br/>");
var tafel3 = 3;


document.write("1 x "+ tafel3 + " = " + tafel3 +"<br/>");
document.write("2 x "+ tafel3 + " = " + tafel3*2+"<br/>");
document.write("3 x "+ tafel3 + " = " + tafel3*3+"<br/>");
document.write("4 x "+ tafel3 + " = " + tafel3*4+"<br/>");
document.write("5 x "+ tafel3 + " = " + tafel3*5+"<br/>");
document.write("6 x "+ tafel3 + " = " + tafel3*6+"<br/>");
document.write("7 x "+ tafel3 + " = " + tafel3*7+"<br/>");
document.write("8 x "+ tafel3 + " = " + tafel3*8+"<br/>");
document.write("9 x "+ tafel3 + " = " + tafel3*9+"<br/>");
document.write("10 x "+ tafel3 + " = " + tafel3*10+"<br/>"+"<br/>");

// Vraag: hoe kun je er op een handige manier voor zorgen dat je gemakkelijk een ander tafel kunt uitrekenen, zonder dat je al te veel wijzigingen in de code moet doen?
// var tafel = prompt("Geef een cijfer voor de tafel.");
// var intgetal = parseInt(tafel);
// en dan de variabel 'tafel3' en 'tafel 6' vervangen voor 'tafel'

document.write("vraag:"+"<br/>"+"<br/>");
var tafel = prompt("Geef een cijfer voor de tafel.");
var intgetal = parseInt(tafel);

document.write("1 x "+ tafel + " = " + tafel +"<br/>");
document.write("2 x "+ tafel + " = " + tafel*2+"<br/>");
document.write("3 x "+ tafel + " = " + tafel*3+"<br/>");
document.write("4 x "+ tafel + " = " + tafel*4+"<br/>");
document.write("5 x "+ tafel + " = " + tafel*5+"<br/>");
document.write("6 x "+ tafel + " = " + tafel*6+"<br/>");
document.write("7 x "+ tafel + " = " + tafel*7+"<br/>");
document.write("8 x "+ tafel + " = " + tafel*8+"<br/>");
document.write("9 x "+ tafel + " = " + tafel*9+"<br/>");
document.write("10 x "+ tafel + " = " + tafel*10+"<br/>"+"<br/>");


//opdracht 3
document.write("opdracht 3"+"<br/>"+"<br/>");



var getal = 12;

getal = getal + 6;
document.write("12 + 6 = " + getal +"<br/>");

getal = getal * 10;
document.write("18 * 10 = " + getal + "<br/>");

getal = getal / 5;
document.write("180 / 5 = " + getal+ "<br/>")

getal = getal - 12;
document.write("36 - 12 = " + getal+ "<br/>");


document.write("de uitkomst is: " + getal+"<br/>"+"<br/>");

// opdracht 4

document.write("opdracht 4"+"<br/>"+"<br/>");

var inputgetal = prompt("voer een cijfer in");
var int = parseInt(inputgetal);


document.write(inputgetal + " + 6 = ");
inputgetal = parseInt(inputgetal) + 6;
document.write(inputgetal + "<br/>");


document.write(inputgetal+" * 10 = ");
inputgetal = inputgetal * 10;
document.write(inputgetal + "<br/>");


document.write(inputgetal + " / 5 = ")
inputgetal = inputgetal / 5;
document.write(inputgetal + "<br/>");


document.write(inputgetal + " - 12 = ");
inputgetal = inputgetal - 12;
document.write(inputgetal + "<br/>")

document.write("de uitkomst is: " + inputgetal);
