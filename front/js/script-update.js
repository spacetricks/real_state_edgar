//este script es para obtener datos de un formulario en html 
var form = document.getElementById("form");
var inputs = document.getElementsByTagName("input");
var inputProperty = inputs[0];
var inputLocation = inputs[1];
var inputPrice = inputs[2];
var inputSubmit = inputs[3];

console.log(form);

//configiruando el boton de enviar
inputSubmit.addEventListener("click",sendData);
function sendData (e){
  e.preventDefault();
  console.log(inputProperty.value ,
    inputLocation.value,
    inputPrice.value
  );
}





var property = "mini house";
var local = true;
var price = 2000;



var holderProperties = document.getElementById("holder-properties");
console.log(holderProperties);


var endpoint = "http://localhost/back-re/index-insert.php";
var xhr = new XMLHttpRequest();

xhr.open("POST", endpoint, true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//send es leer pero requiere capturar un evento
//xhr.send("property=" + property + "&location=" + local + "&price=" + price);
//agregando un evento
xhr.addEventListener("load", dataLoaded);

function dataLoaded(e){
    //var jsonData = JSON.parse(e.target.responseText);
    var jsonData = e.target.responseText;
    var htmlData = "";
    

    holderProperties.innerHTML = htmlData;
    //console.log(htmlData);
    console.log(jsonData);
   }

    

 /*console.log(jsonData [0].property);
    console.log(jsonData [1].location);
    console.log(jsonData [2].price);*/


