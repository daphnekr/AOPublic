// Daphne Kramer
// Applicatie en Mediaontwikkelaar

var ja = "ja";
var nee = "nee";

geel = prompt("Is de kaas geel?");
if(geel == ja){//Is de kaas geel?   
    gaten = prompt("Zitten er gaten in?");
    if(gaten == nee){//Zitten er gaten in?
        hard = prompt("Is de kaas hard als steen?");
        if(hard == ja){
            document.write("Pammigiano Reggiano");
        }
        else{
            document.write("Goudse kaas");
        }
    } 
    if(gaten == ja){//Zitten er gaten in?
        duur = prompt("Is de kaas belachelijk duurt?");
        if(duur == ja){//Zitten er gaten in?
            document.write("Emmenthaler");
        }
        else{
            document.write("Leerdammer");
        }
    }
}



if(geel == nee){//Is de kaas geel?
    schimmels = prompt("Heeft de kaas blauwe schimmels?");
    if(schimmels == ja){
        if(schimmels == nee){//Heeft de kaas blauwe schimmels?
            korst1 = prompt("Heeft de kaas een korst?");
            if(korst1 == ja){
                document.write("Camembert");
            }
            else{
                document.write("Mozzarella");
            }
        }
        korst = prompt("Heeft de kaas een korst?");
        if(korst == ja){
            document.write("Blue de Rochbaron");
        }
        else{
            document.write("Foume d'Ambert");
        }
    }
}
