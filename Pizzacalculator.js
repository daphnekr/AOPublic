alert("Kies uw pizza afmeting en het aantal"); //geeft pop-up met de vraag

var Small = prompt("Small: €8,95. Hoe veel wilt u er?"); //geeft pop-up met input met de vraag
var Medium = prompt("Medium: €10,95. Hoe veel wilt u er?"); //geeft pop-up met input met de vraag
var Large = prompt("Large: €12,95. Hoe veel wilt u er?"); //geeft pop-up met input met de vraag

var intgetal = parseInt(Small);
var intgetal = parseInt(Medium);
var intgetal = parseInt(Large);

var priceSmall = 8.95; //de prijs van een small pizza
var priceMedium = 10.95; //de prijs van een medium pizza
var priceLarge = 12.95; //de prijs van een large pizza


totaal = 0;
totaalSmall = 0;
totaalMedium = 0;
totaalLarge = 0;

function order(){
    totaalSmall = totaalSmall + Small * priceSmall;
    totaalMedium = totaalMedium + Medium * priceMedium;
    totaalLarge = totaalLarge + Large * priceLarge;
    totaal = totaalSmall + totaalMedium + totaalLarge;
    return totaal;
}


document.write("Aantal small pizza's: "+ Small + "<br/>");
document.write("Aantal medium pizza's: " + Medium + "<br/>");
document.write("Aantal large pizza's: " + Large + "<br/><br/> ")

document.write("Het totaal is: €" + order(totaal) );