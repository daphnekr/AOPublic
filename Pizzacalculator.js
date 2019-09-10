

alert("Kies uw pizza afmeting en het aantal"); //geeft pop-up met de vraag

var Small = prompt("Small: €8,95. Hoe veel wilt u er?"); //geeft pop-up met input met de vraag
var Medium = prompt("Medium: €10,95. Hoe veel wilt u er?"); //geeft pop-up met input met de vraag
var Large = prompt("Large: €12,95. Hoe veel wilt u er?"); //geeft pop-up met input met de vraag

var priceSmall = 8.95; //de prijs van een small pizza
var priceMedium = 10.95; //de prijs van een medium pizza
var priceLarge = 12.95; //de prijs van een large pizza


totaal = 0;
function order(){
    //geeft het totaal van 1 small pizza
    if (Small == 1 && Medium == 0 && Large == 0){
        totaal = totaal + priceSmall;
        return totaal;}

    //geeft het totaal van 1 medium pizza
    if (Small == 0 && Medium == 1 && Large == 0){
        totaal = totaal + priceMedium;
        return totaal;}

    //geeft het totaal van 1 large pizza
    if (Small == 0 && Medium == 0 && Large == 1){
        totaal = totaal + priceLarge;
        return totaal;}



    if (Small == 1 && Medium == 1 && Large == 1){
        totaal = totaal + priceSmall + priceMedium + priceLarge;
        return totaal;

    }
    if (Small == 2 && Medium == 1 && Large == 1){
        totaal = totaal + priceSmall*2 + priceMedium + priceLarge;
        return totaal;
    }
    if (Small == 2 && Medium == 2 && Large == 1){
        totaal = totaal + priceSmall*2 + priceMedium*2 + priceLarge;
        return totaal;
    }
}


document.write("Aantal small pizza's: "+ Small + "<br/>");
document.write("Aantal medium pizza's: " + Medium + "<br/>");
document.write("Aantal large pizza's: " + Large + "<br/><br/>")
document.write("Het totaal is: €" + order(totaal) );

