<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creacion Empresas</title>
    <link rel="stylesheet" href="css/estilosCRUD.css">
    <style>
        
    </style>
</head>

<body>
    <?php
    /*
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    */
    require "../funciones/config.php";


    //comprobamos si existe "submit"
    if (isset($_POST["submit"])) {
        //claves => valores
        $nueva_empresa = array(

            "Denominacion"          => $_POST["Denominacion"],
            "Telefono"              => $_POST["Telefono"],
            "horario_atencion"      => $_POST["horario_atencion"],
            "quienes_somos"         => $_POST["quienes_somos"],
            "Latitud"               => $_POST["Latitud"],
            "Longitud"              => $_POST["Longitud"],
            "Domicilio"             => $_POST["Domicilio"],
            "Email"                 => $_POST["Email"]
        );

        $sql = "INSERT INTO empresa (Denominacion, Telefono, horario_atencion, quienes_somos, Latitud, Longitud, Domicilio, Email) 
        VALUES (:Denominacion, :Telefono, :horario_atencion, :quienes_somos, :Latitud, :Longitud, :Domicilio, :Email)";

        //sentencias preparadas para dar una mayor seguridad.
        try {
            //echo $sql;
            $statement = $conexion->prepare($sql);  //si es true, da un obj PDOstatement
            $statement->execute($nueva_empresa);
        } catch (PDOException $error) {
            echo $error->getMessage();
        }
    }
    ?>

    <!-- <?php // if (isset($_POST["submit"]) && $statement) :  
            ?>
        <blockquote><?php //echo $_POST["Denominacion"]
                    ?> se ha añadido correctamente</blockquote>
    <?php // endif; 
    ?> -->


    <main class="contenedor seccion contenido-centrado">
        <h2 class="fw-300 centrar-texto">Añadir Empresa</h2>
        <form method="post">
            <table class="blueTable">
                <tr>
                    <td><label for="Denominacion">Denominacion:</label></td>
                    <td><input type="text" name="Denominacion" id="Denominacion"></td>
                </tr>
                <tr>
                    <td><label for="Telefono">Telefono:</label></td>
                    <td><input type="tel" name="Telefono" id="Telefono"></td>
                </tr>
                <tr>
                    <td><label for="horario_atencion">Horario de Atencion:</label></td>
                    <td><input type="text" name="horario_atencion" id="horario_atencion"></td>
                </tr>
                <tr>
                    <td><label for="quienes_somos">Quienes somos:</label></td>
                    <td><input type="text" name="quienes_somos" id="quienes_somos"></td>
                </tr>
                <tr>
                    <td><label for="Latitud">Latitud:</label></td>
                    <td><input type="number" step="0.01" name="Latitud" id="Latitud"></td>
                </tr>
                <tr>
                    <td><label for="Longitud">Longitud:</label></td>
                    <td><input type="number" step="0.01" name="Longitud" id="Longitud"></td>
                </tr>
                <tr>
                    <td><label for="Domicilio">Domicilio:</label></td>
                    <td><input type="text" name="Domicilio" id="Domicilio"></td>
                </tr>
                <tr>
                    <td><label for="Email">E-mail:</label></td>
                    <td><input type="email" name="Email" id="Email"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" name="submit" value="Añadir" class="boton"></td>
                </tr>
            </table>
        </form>
    </main>
    <?php include_once "read.php"; ?>
    <section class="contenedor seccion contenido-centrado">
        <form action="POST">
            <table>
                <tr>
                    <td><a href="create.php"><input type="submit" name="submitActualizar" value="Volver" class="boton"></a></td>
                </tr>
            </table>
        </form>
    </section>



</body>

</html>