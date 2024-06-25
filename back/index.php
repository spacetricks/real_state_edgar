<?php
header("Access-Control-Allow-Origin: *");

//arreglo asociativo
$datarealestate = [ 
    "data" => [
        ["property" => "house", "location" => true, "price" => 30000],
        ["property" => "apartment", "location" => true, "price" => 20000],
        ["property" => "parking", "location" => true, "price" => 50000],
        ["property" => "local", "location" => true, "price" => 60000]
    ]
];

echo json_encode($datarealestate);

?>