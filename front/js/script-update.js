//este script es para obtener datos de un formulario en html 
var form = document.getElementById("form");
var inputs = document.getElementsByTagName("input");
var inputId = inputs [0];
var inputProperty = inputs[1];
var inputLocation = inputs[2];
var inputPrice = inputs[3];
var inputSubmit = inputs[4];

console.log(form);

//configiruando el boton de enviar
inputSubmit.addEventListener("click",sendData);
function sendData (e){
  e.preventDefault();
  console.log(inputId.value,
    inputProperty.value,
    inputLocation.value,
    inputPrice.value
  );
}




var id = 4;
var property = "mini house";
var local = true;
var price = 2000;



var holderProperties = document.getElementById("holder-properties");
console.log(holderProperties);


var endpoint = "http://localhost/back-re/index-update.php";
var xhr = new XMLHttpRequest();

xhr.open("POST", endpoint, true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//send es leer pero requiere capturar un evento
xhr.send(id +"id=" + "&property=" + property + "&location=" + local + "&price=" + price);
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


