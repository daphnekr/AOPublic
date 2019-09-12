// Daphne Kramer
// Applicatie ontwikkelaar

//de prijs van een small, medium en large pizza
var priceSmall = 8.00;
var priceMedium = 10.00;
var priceLarge = 12.00; 

//met 0 beginnen alle prijzen in totaal
totaal = 0.00;
totaalSmall = 0.00;
totaalMedium = 0.00;
totaalLarge = 0.00;


alert("Kies uw pizza afmeting en het aantal"); //geeft pop-up met de vraag

////geeft pop-up met input met de vragen hieronder
do  {
        small = parseInt(prompt("Small: €8,00. Hoe veel wilt u er?"));
}   while(!isNumber(small));
do  {
    medium = parseInt(prompt("Medium: €10,00. Hoe veel wilt u er?"));
}   while(!isNumber(medium));
do  {  
    large = parseInt(prompt("Large: €12,00. Hoe veel wilt u er?")); 
}   while(!isNumber(large));

function isNumber(value) {
    var numberPattern = /^[0-9]+$/; // one or more of digits 0 to 9
    return numberPattern.test(value);
    }

//de function telt de prijzen en het aantal van de pizza bij elkaar op en retunt het hele totaal hiervan
function order(){
    totaalSmall = totaalSmall + small * priceSmall;
    totaalMedium = totaalMedium + medium * priceMedium;
    totaalLarge = totaalLarge + large * priceLarge;
    totaal = totaalSmall + totaalMedium + totaalLarge;
    return totaal;
}

//hier worden het aantal pizza's mee op het scherm getoond.
document.write("Aantal small pizza's: "+ small + "<br/>");
document.write("Aantal medium pizza's: " + medium + "<br/>");
document.write("Aantal large pizza's: " + large + "<br/><br/> ")

document.write("Het totaal is: €" + order(totaal).toFixed(2)); //roept uit de function 'order' het totaal op van alle prijzen bij elkaar opgeteld en toont het op het scherm