alert("Welkom bij mijn game");
alert("Je gaat op reis. Hierbij komen een aantal obstakels voor. Zorg dat je de juiste keuze maakt om op jouw einsbestemming te komen!");

var name = prompt("Wat is je naam?");

var answer = prompt("Welkom " + name + "\nWaar gaat jouw reis naar toe? \n\n 1. Bali \n 2. Marokko \n\n(Typ 1 of 2)");


if(answer == 1){
    answer = prompt("Je hebt gekozen om naar Bali te gaan! \n\nHoe wil je er naar toe reizen? \n\n1. Met het vliegtuig \n2. Met een cruiseschip \n\n(Typ 1 of 2");
    if(answer == 1){
        answer = prompt("Je hebt gekozen om met het vliegtuig te gaan \nHet is erg druk op het vliegveld en je hebt 2 uur vertraging. \n\nWat wil je gaan doen? \n\n1. Eten halen \n2. Alvast naar de gate gaan en een boek lezen \n\n(Typ 1 of 2)");
        if(answer == 1){
            alert("Je gaat eten halen bij een restaurant maar het valt verkeerd. Je wordt er heel erg ziek van en kan niet meer op vakantie gaan. \n\nEinde vakantie...");
        }
        else if(answer == 2){
            answer = prompt("Je heb 2 uur lang een boek gelezen en gaat ontspannen het vliegtuig in. \nJe bent een paar uur verder en je bent bijna in Bali. Je moet alleen nog erg nodig naar het toilet. \n\nWat ga je doen? \n\n1. Naar het toilet \n2. Wachten tot je geland bent en op het vliegveld gaan \n\n(Typ 1 of 2)");
            if(answer == 1){
                alert("Je gaat naar het toilet toe en het vliegtuig komt ineens in hele heftige turbulentie. Je stoot je hoofd tegen een kastje in de wc en bent bewusteloos. Je wordt wakker in het ziekenhuis... In Nederland. \n\n Einde vakantie...");
            }
            else if(answer == 2){
                alert("Je bent geland op Bali! \nAan het einde van de vlucht heb je nog heftige turbulentie gehad, maar jij zat veilig in je gordel. \nJe gaat snel naar het toilet op het vliegveld en daarna kan je vakantie beginnen! \nFijne vakantie " + name + "!");
            }
            else{
                alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
            }
        }
        else{
            alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
        }
    }
    else if(answer == 2){
        answer = prompt("Je hebt gekozen om met een cruiseschip te gaan. Je stond in de file om bij de haven te komen. Er staan 2 grote cruiseschepen maar je weet niet zeker welke het is en je hebt geen tijd om het te controleren. \n\n Welke kies je? \n\n1. De rechter \n2. De linker \n\n(Typ 1 of 2)");
        if(answer == 1){
            alert("Je heb het verkeerde schip gekozen. Je weet niet waar je nu terecht komt. \n\nEinde vakantie...")
        }
        else if(answer == 2){
            answer = prompt("Je hebt gelukkig het juiste schip gekozen. Het schip vertrekt richting Bali. \n\nHet is tijd om wat te gaan doen om de tijd te doden. \n\nWat wil je gaan doen?\n\n1. Wat gaan eten \n2.Even een dutje gaan doen");
            if(answer == 1){
                alert("Je hebt gekozen om wat te gaan eten. \nHet eten is verkeerd gevallen en je bent heel erg ziek geworden.\nDe eerste stop van het cruiseschip ga je er vanaf om naar het ziekenhuis te gaan.\n\nEinde vakantie..");
            }
            else if(answer == 2){
                alert("Je hebt de hele reis geslapen en bent zonder problemen in Bali aangekomen. \nJe vakantie gaat nu beginnen! \n\nFijne vakantie "+name + "!");
            }
            else{
                alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
            }
        }
        else{
            alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
        }
    }
    else{
        alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
    }




} 
else if(answer == 2){
    answer = prompt("Je hebt gekozen om naar Marokko te gaan! \n\nHoe wil je er naar toe reizen? \n\n1. Met het vliegtuig \n2. Met een cruiseschip \n\n(Typ 1 of 2)");
    if(answer == 1){
        answer = prompt("Je komt op het vliegveld aan en gaat inchecken. \nEr wordt aangeboden om je vlucht om te boeken, dan kan je nu gelijk vertrekken. \n\nWat wil je doen? \n\n1. Vlucht omboeken \n2. Zelfde vlucht houden \n\n(Typ 1 of 2)");
        if(answer == 1){
            alert("Je rent snel door het vliegveld heen om de vlucht te halen die je omgeboekt hebt. \nJe komt aan bij de gate maar die is al gesloten. \n\nEinde vakantie...");
        }
        else if(answer == 2){
            answer = prompt("Je bent ingecheckt en gaat rustig door de douane heen. Je hebt nu zin om te gaan shoppen op het vlieveld. \n\nHoeveel winkel wil je gaan bezoeken? (Kies een aantal)");
            if(answer >= 4){
                alert("Je bent te lang bezig geweest met shoppen en bent de tijd vergeten. Je komt erachter dat je vliegtuig allang vertrokken is zonder jou. \n\nEinde vakantie...");
            }
            else if(answer <= 3){
                answer = prompt("Je bent naar "+ answer+ " winkel(s) geweest en bent ruim op tijd bij de gate aangekomen. Je gaat het vliegtuig in en gaat opstijgen. Eenmaal in de lucht kom je erachter dat je telefoon nog in je handbagage zit en die is opgeborgen bovenin. \n\nWat ga je doen? \n1. Telefoon pakken \n2. Blijven zitten");
                if(answer == 1){
                    alert("De bagage valt uit de bak op je hoofd. Je bent gewond geraakt en er wordt een tussenstop gemaakt, waar je wordt meegenomen. \n\nEinde vakantie...");
                }   
                else if(answer == 2){
                    alert("Je bent blijven zitten en bent zonder problemen in Marokko aangekomen. \n\nFijne vakanatie " + name + "!");
                }
                else{
                    alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
                }         
            }
            else{
                alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
            }
        }
        else{
            alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
        }
    }
    else if(answer == 2){
        answer = prompt("Je ");
    }
    else{
        alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
    }
} 
else{
    alert("Je hebt geen correct nummer gekozen. Begin opnieuw")
}