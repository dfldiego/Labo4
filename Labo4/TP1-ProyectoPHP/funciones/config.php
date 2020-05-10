<?php
    $host       = "localhost";
    $usuariobd  = "root";
    $password   = "199299";
    $nombrebd   = "lab4-tp1";
    $dsn        = "mysql:host=$host;dbname=$nombrebd";

    try {
        $conexion = new PDO($dsn, $usuariobd, $password);
        //echo "conecta";
    } catch (PDOException $error) {
        echo $error->getMessage();
    }

?>