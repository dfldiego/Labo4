<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Envia JSON a BBDD</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>

    <body>
        <?php
        require_once('config.php');
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);

        ini_set('max_execution_time', 300);

        for ($codigo = 1; $codigo <= 300; $codigo++) {

            $datos_json = @file_get_contents('https://restcountries.eu/rest/v2/callingcode/' . $codigo);

            if ($datos_json === FALSE) {
                continue;
            }

            $datos_paises = json_decode($datos_json, true);
            foreach ($datos_paises as $dato_pais) {

                $nuevo_pais = array(
                    "codigoPais" => $dato_pais['callingCodes'][0],
                    "nombrePais" => $dato_pais['name'],
                    "capitalPais" => $dato_pais['capital'],
                    "region" => $dato_pais['region'],
                    "poblacion" => $dato_pais['population'],
                    "latitud" => $dato_pais['latlng'][0],
                    "longitud" => $dato_pais['latlng'][1]
                );

                $sql_paises_bd = "SELECT * FROM pais WHERE codigoPais= :codigoPais";

                try {
                    //echo $sql_paises_bd;

                    $statement = $conexion->prepare($sql_paises_bd);
                    $statement->execute();
                    $resultado = $statement->fetchAll();


                    if ($resultado[0] != NULL) {
                        $sql_pais = "UPDATE pais 
                            SET nombrePais=:nombrePais, 
                            capitalPais=:capitalPais, 
                            region=:region, 
                            poblacion=:poblacion, 
                            latitud=:latitud, 
                            longitud=:longitud
                            WHERE codigoPais=:codigoPais";
                        try {
                            //echo $sql_pais;
                            $statement = $conexion->prepare($sql_pais);
                            $statement->execute($nuevo_pais);
                        } catch (PDOException $error) {
                            echo $error->getMessage();
                        }
                    } else {
                        $sql_pais = "INSERT INTO pais (codigoPais, nombrePais, capitalPais, region, poblacion, latitud, longitud)
                            VALUES(:codigoPais, :nombrePais, :capitalPais, :region, :poblacion, :latitud, :longitud)";
                        try {
                            //echo $sql_pais;
                            $statement = $conexion->prepare($sql_pais);
                            $statement->execute($nuevo_pais);
                        } catch (PDOException $error) {
                            echo $error->getMessage();
                        }
                    }
                } catch (PDOException $error) {
                    echo $error->getMessage();
                }
            }
        }

        echo "finalizado";
        ?>

        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous">
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">
        </script>
        <script>
            $(function () {

            });
        </script>
    </body>

</html>