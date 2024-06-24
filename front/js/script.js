
var holderProperties = document.getElementById("holder-properties");
console.log(holderProperties);

var endpoint = "http://localhost:5500/front/data/real-state-properties.json";
var xhr = new XMLHttpRequest();
//console.log(xhr);

// Get es traer, endpoint es de donde y true es asincrono
xhr.open("GET", endpoint, true);
//send es leer pero requiere capturar un evento
xhr.send();
//agregando un evento
xhr.addEventListener("load", dataLoaded);

function dataLoaded(e){
    var jsonData = JSON.parse(e.target.responseText);
    var htmlData = "";
    
    for(var i = 0; i< jsonData.data.length; i++){
        var currentRow = jsonData.data [i];
        htmlData += "<h3>" + currentRow.property + "</h3>" + 
        
        "<p>Location: " + currentRow.location+ "</p>" + 
        "<p>Price: " + currentRow.price+ "</p>" + 
        
        "<button> Comprar </button>"

    }
    holderProperties.innerHTML = htmlData;
    console.log(htmlData);
   }

    

 /*console.log(jsonData [0].property);
    console.log(jsonData [1].location);
    console.log(jsonData [2].price);*/


