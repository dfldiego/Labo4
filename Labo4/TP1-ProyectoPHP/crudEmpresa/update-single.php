<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edicion de empresa seleccionada</title>
    <link rel="stylesheet" href="css/estilosCRUD.css">
</head>

<body>
    <?php
    /*
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    */
    require "../funciones/config.php";

    //Comprobamos si existe y no es nulo el parametro id pasado por la URL
    if (isset($_GET["Id"])) {
        $sql = "SELECT * 
                FROM empresa 
                WHERE Id = :Id";

        try {
            //preparo la sentencia
            $statement = $conexion->prepare($sql);

            //uso un bindValue:  para que el parametro id de la sentencia obtenga el valor pasado por URL
            $statement->bindValue(':Id', $_GET["Id"]);

            //ejecuto
            $statement->execute();

            //paso a otra variable $empresa el resultado de fetch --> fetch_assoc: array indexado por nombre columna
            $empresa = $statement->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $error) {
            echo $error->getMessage();
        }
    } else {
        echo "Se necesita un Id";
        exit;
    }

    ?>

    <?php
    /*2.
        luego del PASO 1 
        pasamos a esta parte a realizar la modificacion 
        1. creo un array unidimensional donde guardo en nombre de las columnas de mi tabla(claves) 
            y campo del form(datos-valores)
        2.luego sentencia sql update
        3.preparo la consulta y la ejecuto
    */

    if (isset($_POST["submit"])) {
        $nueva_empresa = array(
            "Id"                    => $_POST["Id"],
            "Denominacion"          => $_POST["Denominacion"],
            "Telefono"              => $_POST["Telefono"],
            "horario_atencion"      => $_POST["horario_atencion"],
            "quienes_somos"         => $_POST["quienes_somos"],
            "Latitud"               => $_POST["Latitud"],
            "Longitud"              => $_POST["Longitud"],
            "Domicilio"             => $_POST["Domicilio"],
            "Email"                 => $_POST["Email"]
        );

        $sql = "UPDATE empresa 
                SET 
                Denominacion = :Denominacion,
                Telefono = :Telefono,
                horario_atencion = :horario_atencion,
                quienes_somos = :quienes_somos,
                Latitud = :Latitud,
                Longitud = :Longitud,
                Domicilio = :Domicilio,
                Email = :Email
                WHERE Id = :Id";

        try {
            //echo $sql;
            $statement = $conexion->prepare($sql);
            $statement->execute($nueva_empresa);
        } catch (PDOException $error) {
            echo $error->getMessage();
        }
    }
    ?>


    <!--1.
    Aqui se encuentran los datos para modificar los datos del usuario
    de la consulta anterior obtuvimos los datos del usuario con un id especifico
    aqui rellenamos los datos de uno o varios campos de ese id especifico sin perder info del resto de columnas
    al apretar MODIFICAR se envia un POST con los datos, a este mismo fichero pero entra a:
    // if (isset($_POST["submit"])) { 
    -->

    <?php if (isset($_POST["submit"]) && $statement) : ?>
        <blockquote><?php echo $_POST["Denominacion"]; ?> se ha modificado correctamente</blockquote>
    <?php endif; ?>

    <h2 class="fw-300 centrar-texto">Modificando Empresa seleccionada</h2>
    <main class="contenedor seccion contenido-centrado">
        <form method="post">
            <table class="blueTable">
                <?php foreach ($empresa as $key => $value) : ?>
                    <tr>
                        <td><label for="<?php echo $key; ?>"><?php echo ucfirst($key); ?></label></td>
                        <td><input type="text" name="<?php echo $key; ?>" id="<?php echo $key; ?>" value="<?php echo $value; ?>" <?php echo ($key === 'Id' ? 'readonly' : null); ?>></td>
                    </tr>
                <?php endforeach; ?>
            </table>
            <input type="submit" name="submit" value="Modificar" class="boton">
        </form>
        <a href="create.php"><input type="button" name="buttonActualizar" value="Volver" class="boton"></a>
    </main>
   

</body>

</html>