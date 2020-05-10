<?php

//carga de libreria de PHP para MongoDB
require_once ("./vendor/autoload.php");

//codigo para muestra de errores

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

try {
    //conexion a MongoDB
    $conexion = new MongoDB\Client;
    $db = $conexion->paises_db;
    $collection = $db->paises;
} catch (MongoConnectionException $e) {
    echo '<p>Error. No se pudo lograr conexión con Mongo.</p>';
    exit();
}
$url = "https://restcountries.eu/rest/v2/callingcode/";


ini_set('max_execution_time', 300);
for ($codigo = 1; $codigo <= 300; $codigo++) {

    //transmitir el contenido de la url  a una cadena
    $datos_json = @file_get_contents($url . (string) $codigo);

    //si la url no trae nada, continuar al siguiente codigo.
    if ($datos_json === FALSE) {
        continue;
    }

    //Convierto un string de JSON a una objeto de PHP. 
    $datos_paises = json_decode($datos_json, true);

    //verificar si objeto PHP es nula
    if ($datos_paises != null) {
        foreach ($datos_paises as $dato_pais) {

            //Creo un array con los datos que necesito del objeto 
            $codigoPais = $dato_pais['callingCodes'][0];
            $nombrePais = $dato_pais['name'];
            $capitalPais = $dato_pais['capital'];
            $region = $dato_pais['region'];
            $poblacion = $dato_pais['population'];
            $latitud = $dato_pais['latlng'][0];
            $longitud = $dato_pais['latlng'][1];

            //Busco el nuevo pais en la BBDD
            $sql_select = $collection->findOne(
                    ['codigoPais' => $codigoPais]
            );

            //si el nuevo pais no se encuentra en la BBDD--> la insertamos.
            if ($sql_select == NULL) {
                $insertar_pais = $collection->insertOne([
                    'codigoPais' => $codigoPais,
                    'nombrePais' => $nombrePais,
                    'capitalPais' => $capitalPais,
                    'region' => $region,
                    'poblacion' => $poblacion,
                    'latitud' => $latitud,
                    'longitud' => $longitud
                ]);
            } else {
                $actualizar_pais = $collection->updateOne(
                        ['codigoPais' => $codigoPais],
                        ['$set' => [
                                        'codigoPais' => $codigoPais,
                                        'nombrePais' => $nombrePais,
                                        'capitalPais' => $capitalPais,
                                        'region' => $region,
                                        'poblacion' => $poblacion,
                                        'latitud' => $latitud,
                                        'longitud' => $longitud
                                   ]
                        ]
                );
                printf("Coincidió con %d documentos \n", $actualizar_pais->getMatchedCount());
                printf("Modificó %d documentos \n", $actualizar_pais->getModifiedCount());
                
            }
        }
    } else {
        continue;
    }
}
?>