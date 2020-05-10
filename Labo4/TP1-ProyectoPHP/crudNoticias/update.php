<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edicion de empresa seleccionada</title>
    <link rel="stylesheet" href="../crudEmpresa/css/estilosCRUD.css">
</head>

<body>

    <?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    require "../funciones/config.php";

    //Comprobamos si existe y no es nulo el parametro id pasado por la URL
    if (isset($_GET["id"])) {
        $sql = "SELECT * 
                FROM noticia 
                WHERE id = :id";

        try {
            //preparo la sentencia
            $statement = $conexion->prepare($sql);

            //uso un bindValue:  para que el parametro id de la sentencia obtenga el valor pasado por URL
            $statement->bindValue(':id', $_GET["id"]);

            //ejecuto
            $statement->execute();

            //paso a otra variable $noticia el resultado de fetch --> fetch_assoc: array indexado por nombre columna
            $noticia = $statement->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $error) {
            echo $error->getMessage();
        }
    } else {
        echo "Se necesita un id";
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
        $nueva_noticia = array(
            "id"                     => $_POST["id"],
            "titulo_noticia"         => $_POST["titulo_noticia"],
            "resumen_noticia"        => $_POST["resumen_noticia"],
            "imagen_noticia"         => $_POST["imagen_noticia"],
            "contenido_html"         => $_POST["contenido_html"],
            "publicada"              => $_POST["publicada"],
            "fecha_publicacion"      => $_POST["fecha_publicacion"],
            "idEmpresa"              => $_POST["idEmpresa"]
        );

        $sql = "UPDATE noticia 
                SET 
                titulo_noticia = :titulo_noticia,
                resumen_noticia = :resumen_noticia,
                imagen_noticia = :imagen_noticia,
                contenido_html = :contenido_html,
                publicada = :publicada,
                fecha_publicacion = :fecha_publicacion,
                idEmpresa = :idEmpresa
                WHERE id = :id";

        try {
            //echo $sql;
            $statement = $conexion->prepare($sql);
            $statement->execute($nueva_noticia);
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
    <h2 class="fw-300 centrar-texto">Modificando Empresa seleccionada</h2>
    <main class="contenedor seccion contenido-centrado">
        <form method="post">
            <table class="blueTable">
                <?php foreach ($noticia as $key => $value) : ?>
                    <tr>
                        <td><label for="<?php echo $key; ?>"><?php echo ucfirst($key); ?></label></td>
                        <td>
                            <?php if ($key != 'idEmpresa') : ?>
                                <input type="text" name="<?php echo $key; ?>" id="<?php echo $key; ?>" value="<?php echo $value; ?>" <?php echo ($key === 'id' ? 'readonly' : null); ?>>
                            <?php else : ?>
                                <select name="<?php echo $key; ?>" id="<?php echo $key; ?>">
                                    <option value="<?php echo $value; ?>" selected>
                                        <?php
                                        $sql_empresa = "SELECT * FROM empresa";
                                        $valor_idEmpresa_noticia = $value;
                                        try {
                                            $statement = $conexion->prepare($sql_empresa);
                                            $statement->execute();
                                            $resultado_empresa = $statement->fetchAll();
                                        } catch (PDOException $error) {
                                            echo $error->getMessage();
                                        }
                                        foreach ($resultado_empresa as $fila_empresa) :
                                            if ($valor_idEmpresa_noticia == $fila_empresa['Id']) :
                                                echo $fila_empresa['Denominacion'];
                                            endif;
                                        endforeach;
                                        ?>
                                    </option>
                                    <?php

                                    $sql = "SELECT * FROM empresa ";
                                    $valor_idEmpresa_noticia = $value;
                                    try {
                                        $statement = $conexion->prepare($sql);
                                        $statement->execute();
                                        $resultado = $statement->fetchAll();
                                    } catch (PDOException $error) {
                                        echo $error->getMessage();
                                    }
                                    foreach ($resultado as $fila) :
                                        if ($valor_idEmpresa_noticia != $fila['Id']) :
                                            echo "<option value='" . $fila['Id'] . "'>" . $fila['Denominacion'] . "</option>";
                                        endif;
                                    endforeach;
                                    ?>
                                </select>
                            <?php endif; ?>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </table>
            <input type="submit" name="submit" value="Modificar" class="boton">
        </form>
        <a href="create.php"><input type="button" name="buttonActualizar" value="Volver" class="boton"></a>
    </main>




    <?php if (isset($_POST["submit"]) && $statement) : ?>
        <blockquote><?php echo $_POST["idEmpresa"]; ?> se ha modificado correctamente</blockquote>
    <?php endif; ?>

</body>