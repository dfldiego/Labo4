<?php

//carga de libreria de PHP para MongoDB
require_once ("./vendor/autoload.php");

//codigo para muestra de errores
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


//conexion a MongoDB
$conexion = new MongoDB\Client;
$db = $conexion->selectDatabase('paises_db');
$collection = $db->selectCollection('paises');

/*
  5.1.Codifique un método que seleccione los documentos de la colección países
 *  donde la región sea Americas. Muestre el resultado por pantalla o consola.
 */

echo "<br><b>Los paises de America de la BBDD</b><br>";

$paises_america = array('region' => 'Americas');
$cursor = $collection->find($paises_america);

foreach ($cursor as $pais_america) {
    print_r($pais_america);
    echo '<br>';
}

/* 5.2. Codifique un método que seleccione los documentos de la colección países
 *  donde la región sea Americas y la población sea mayor a 100000000 . 
 * Muestre el resultado por pantalla o consola.
 */

//$rango_poblacion = array('poblacion' => array('$gt' => 100000000));
//$paises_seleccionados = $collection->find($rango_poblacion);

echo "<br><b>Los paises de America con poblacion mayor a cien millon.</b><br>";

$js = "function() {
    return this.poblacion > 100000000 && this.region == 'Americas';
}";

$paises_america_cien_m = $collection->find(array(
    '$where' => $js
        ));

foreach ($paises_america_cien_m as $pais_america_cien_m) {
    var_dump($pais_america_cien_m);
    echo '<br>';
}

/* 5.3. Codifique un método que seleccione los documentos de la colección países
 *  donde la región sea distinto de Africa . (investigue $ne). Muestre el
 *  resultado por pantalla o consola. */

echo "<br><b>Paises que no son africanos</b><br>";

$where = array('region' => ['$ne' => 'Africa']);
$no_africa = $collection->find($where);

foreach ($no_africa as $valor) {
    print_r($valor);
    echo '<br>';
}

/* 5.4. Codifique un método que actualice el documento de la colección países
 *  donde el name sea Egypt ,cambiando el name a “Egipto” y la población
 *  a 95000000 */

echo "<br><b>Actualizando Egypt</b><br>";

$egiptos = array('nombrePais' => 'Egypt');

$actualizar_egipto = $collection->updateOne(
        $egiptos,
        ['$set' => [
                'nombrePais' => 'Egipto',
                'poblacion' => '95000000'
            ]
        ]
);

$selecciona_egipto = $collection->findOne(['nombrePais' => 'Egipto']);
print_r($selecciona_egipto);
echo '<br>';

/* 5.5. Codifique un método que elimine el documento de la colección países
 *  donde el código del país sea 258 */

echo "<br><b>Eliminando pais con codigo=258</b><br>";


try {
    $selecciona_pais = $collection->findOne(['codigoPais' => '258']);
    if (empty($selecciona_pais)) {
        throw new Exception("Error. No se encuentra el pais o ya ha sido"
                . " eliminado");
    }
    $elimina_pais = $collection->deleteOne($selecciona_pais);
} catch (Exception $ex) {
    $ex->getMessage();
}



/* 5.6. Describa que sucede al ejecutar el método drop() sobre una colección y 
 * sobre una base de datos. */

echo "<br><b>Metodo drop()</b><br>";
echo "<i>sobre una coleccion:</i> Elimina esta coleccion y elimina sus indices";
echo "<br>";
echo "<i>sobre una base de datos:</i> Elimina todas las colecciones de la BBDD ";
echo "<br>";

/* 5.7. Codifique un método que seleccione los documentos de la colección
 *  países cuya población sea mayor a 50000000 y menor a 150000000. 
 * Muestre el resultado por pantalla o consola. */

echo "<br><b>Paises con poblacion entre 50M y 150M </b><br>";

$desde = 50000000;
$hasta = 150000000;

function paises_poblacion_rango($collection, $desde, $hasta) {
    $where = ['poblacion' => [
            '$gt' => $desde,
            '$lt' => $hasta
        ]
    ];
    $selec_paises = $collection->find($where);

    foreach ($selec_paises as $valor) {
        var_dump($valor);
        echo "<br>";
    }
}

paises_poblacion_rango($collection, $desde, $hasta);
echo "<br>";

/* 5.8. Codifique un método que seleccione los documentos de la colección 
 * países ordenados por nombre(name) en forma Ascendente. sort(). 
 * Muestre el resultado por pantalla o consola. */

echo "<br><b>Paises ordenados por nombre </b><br>";

function ordena_paises_por_nombre($collection) {
    $lista_doc = $collection->find(
            [],
            [
                'sort' => ['nombrePais' => 1]
            ]
    );

    foreach ($lista_doc as $valor) {
        var_dump($valor);
        echo "<br>";
    }
}

ordena_paises_por_nombre($collection);
echo "<br>";

/* 5.9. Describa que sucede al ejecutar el método skip() sobre una 
  colección. Ejemplifique con la colección países. */

echo "<br><b>Metodo skip()</b><br>";
echo "Omite un número de resultados";
echo "<br>";
echo "Omitimos 100 paises de 104 paises:";
echo "<br>";

function skip($collection) {
    $lista_doc = $collection->find(
            [],
            [
                'skip' => 100,
                'sort' => ['nombrePais' => 1]
            ]
    );

    foreach ($lista_doc as $valor) {
        var_dump($valor);
        echo "<br>";
    }
}

skip($collection);

/* 5.10.Describa y ejemplifique como el uso de expresiones regulares 
  en Mongo puede reemplazar el uso de la cláusula LIKE de SQL. */
echo "<br><b>Metodo regex()</b><br>";
echo "determinar si una cadena específica coincide con un patrón "
 . "especificado.";
echo "<br>";

function regex($collection) {
    $lista_doc = $collection->find(
            [
                'nombrePais' => [
                    '$regex' => 'ge'
                ]
            ]
    );

    foreach ($lista_doc as $valor) {
        var_dump($valor);
        echo "<br>";
    }
}

regex($collection);

/* 5.11. Cree un nuevo índice para la colección países asignando el
 *  campo código como índice. investigue createIndex()) */
echo "<br><b>Creando nuevo indice metodo createIndex()</b><br>";

$createIndex = $collection->createIndex( ['codigoPais' => 1]);

$selec = $collection->find();

foreach ($selec as $valor) {
        var_dump($valor);
        echo "<br>";
    }

/*5.12.Describa como se realiza un backup de la base de datos
 *  mongo países_db.*/
    
    echo "<br><b>Backup en MongoDB</b><br>";
    echo "<p> Para realizar backup de una base de datos MongoDB, "
    . "debes usar la utilidad mongodump, que tienes disponible en"
            . " todos nuestros planes de hosting. <br> "
            . "<b>mongodump -h host -u usuario -p passsword --authenticationDatabase base_datos -d base_datos -o dir<b> <br>"
            . "El comando almacenará los contenidos de las colecciones del backup  en un directorio con el nombre dir. Posteriormente"
            . "este contenido puede ser restaurado con mongorestore. <br>"
            . " <b>mongorestore -h host -u usuario -p passsword --authenticationDatabase base_datos -d base_datos -o dir <b> </p> <br>";
    