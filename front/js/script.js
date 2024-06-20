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
  
    console.log(JSON.parse(e.target.responseText));

}



