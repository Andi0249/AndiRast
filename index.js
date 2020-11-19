setInterval(function()
{ 

    var a = new Date();
    document.getElementById("Hours").innerHTML = a.getHours();
    
    var b = new Date();
    document.getElementById("Minute").innerHTML = b.getMinutes();
    
    var c = new Date();
    document.getElementById("Second").innerHTML = c.getSeconds();
    x.innerHTML = h + ":" + m + ":" + s;
}, 1000);

// Här  Deklarera variabler så att man kan använda dem senare i koden t.ex färger etc

var button = document.getElementById('start');
var input = document.getElementById('length');
var time = document.getElementById('time');
var display = document.getElementById('display');

// Denna variablen använder vi för att se om dem redan har klickat på start, om dem har så
var isClicked = false;

// Här har vi en eventlistener som sitter och väntar på användaren att trycka på knappen...
button.addEventListener('click', function() {

    // Här kollar vi om dem redan har tryckt knappen, om dem har så skickar vi ett meddelande
        if(isClicked)
        return alert('Du har redan tryckt på starta, ladda om sidan för att börja om!');
    isClicked = true;
    // Den andra variablen är sekunderna, vi tar minuterna multiplicerat med 60 och sedan kör en Math.round...
    // så vi inte får några decimaler
    var minutes = input.value;
    var seconds = Math.round(minutes * 60);

    // Här har vi något vi nog inte sett innan, detta är en interval som körs varje sekund...
    // man kan ändra värdet (1000) nere i koden för längre intervaller, värdet är millisekunder
    var interval = setInterval(function() {
        // Här tar vi bort 1 från seconds variablen varje sekund
        // Så tillslut så kommer seconds vara 0, tilloch med ända ner till oändligt negativt
        seconds--;


        // Men här kollar vi så att seconds inte blir ett negativt tal
        // Om seconds blir 0 så går vi vidare och meddelar att rasten är slut
        
        if(seconds < 1)
        {

               document.getElementById("image").style.display = 'block';

            
            // Om tiden har gått ut så ändrar vi texten och skriver ut hur länge rasten varade
            display.innerHTML = "Rasten varade " + minutes * 60 + " sekunder, nu börjar lektionen!";
            

            var audio = new Audio("sound/mens.mp3");
            audio.play(); 
            
            function flashtext(ele,col) {
                var tmpColCheck = document.getElementById( ele ).style.color;
            
                  if (tmpColCheck === 'red') {
                    document.getElementById( ele ).style.color = col;
                  } else {
                    document.getElementById( ele ).style.color = 'red';
                  }
                } 
            
                setInterval(function() 
                {
                    flashtext('display','green');
                    flashtext('Hours','white');
                    flashtext('Minute','blue');
                    flashtext('Second','red');
                    flashtext('vass','yellow');
                    flashtext('Dottone','white');
                    flashtext('Dottwo','blue');
                    flashtext('display','blue');
                }, 500 ); //set an interval timer up to repeat the function
                 
                

            

            clearInterval(interval);
        }
        // Fast om tiden inte har gått ut så gör vi koden i kodblocket nedan
        else 
        {
            // Som sagt: om tiden inte gått ut så ändrar vi HTML elementet där vi ska visa sekunderna
            time.innerHTML = seconds;
        }
        

        

    
    }, 1000);
})



