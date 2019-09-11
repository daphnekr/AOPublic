alert("Kies uw pizza afmeting en het aantal"); //geeft pop-up met de vraag

////geeft pop-up met input met de vragen hieronder
var Small = prompt("Small: €8,95. Hoe veel wilt u er?"); 
var Medium = prompt("Medium: €10,95. Hoe veel wilt u er?"); 
var Large = prompt("Large: €12,95. Hoe veel wilt u er?"); 

//maakt de input van de variabelen een integer
var intgetal = parseInt(Small);
var intgetal = parseInt(Medium);
var intgetal = parseInt(Large);

//de prijs van een small, medium en large pizza
var priceSmall = 8;
var priceMedium = 10;
var priceLarge = 12; 

//met 0 beginnen alle prijzen in totaal
totaal = 0;
totaalSmall = 0;
totaalMedium = 0;
totaalLarge = 0;


//de function telt de prijzen en het aantal van de pizza bij elkaar op en retunt het hele totaal hiervan
function order(){
    totaalSmall = totaalSmall + Small * priceSmall;
    totaalMedium = totaalMedium + Medium * priceMedium;
    totaalLarge = totaalLarge + Large * priceLarge;
    totaal = totaalSmall + totaalMedium + totaalLarge;
    return totaal;
}

//hier worden het aantal pizza's mee op het scherm getoond.
document.write("Aantal small pizza's: "+ Small + "<br/>");
document.write("Aantal medium pizza's: " + Medium + "<br/>");
document.write("Aantal large pizza's: " + Large + "<br/><br/> ")

document.write("Het totaal is: €" + order(totaal) ); //roept uit de function 'order' het totaal op van alle prijzen bij elkaar opgeteld en toont het op het scherm