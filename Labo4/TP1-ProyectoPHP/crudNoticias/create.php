<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creacion de Noticias</title>
    <link rel="stylesheet" href="../crudEmpresa/css/estilosCRUD.css">
</head>

<body>
    <h2 class="fw-300 centrar-texto">Contacto</h2>
    <?php
    /*
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    */

    require "../funciones/config.php";
    ?>
    <?php
    //comprobamos si existe "submit"
    if (isset($_POST["submit"])) {
        echo $_POST["publicada"];
        //claves => valores
        $nueva_noticia = array(
            "titulo_noticia"         => $_POST["titulo_noticia"],
            "resumen_noticia"        => $_POST["resumen_noticia"],
            "imagen_noticia"         => $_POST["imagen_noticia"],
            "contenido_html"         => $_POST["contenido_html"],
            "publicada"              => $_POST["publicada"],
            "fecha_publicacion"      => $_POST["fecha_publicacion"],
            "id_empresa"             => $_POST["id_empresa"]
        );

        $sql = "INSERT INTO noticia (titulo_noticia, resumen_noticia, imagen_noticia, contenido_html, publicada, fecha_publicacion, idEmpresa) 
        VALUES (:titulo_noticia, :resumen_noticia, :imagen_noticia, :contenido_html, :publicada, :fecha_publicacion, :id_empresa)";

        //sentencias preparadas para dar una mayor seguridad.
        try {
            //echo $sql;
            $statement = $conexion->prepare($sql);  //si es true, da un obj PDOstatement
            $statement->execute($nueva_noticia);
        } catch (PDOException $error) {
            echo $error->getMessage();
        }
    }
    ?>



    <main class="contenedor seccion contenido-centrado">
        <form method="post">
            <table class="blueTable">
                <tr>
                    <td><label for="titulo_noticia">Titulo de la Noticia:</label></td>
                    <td><input type="text" name="titulo_noticia" id="titulo_noticia"></td>
                </tr>
                <tr>
                    <td><label for="resumen_noticia">Resumen de la Noticia:</label></td>
                    <td><input type="text" name="resumen_noticia" id="resumen_noticia"></td>
                </tr>
                <tr>
                    <td><label for="imagen_noticia">Imagen de la Noticia:</label></td>
                    <td><input type="text" name="imagen_noticia" id="imagen_noticia"></td>
                </tr>
                <tr>
                    <td><label for="contenido_html">Contenido HTML:</label></td>
                    <td><input type="text" name="contenido_html" id="contenido_html"></td>
                </tr>
                <tr>
                    <td><label for="publicada">Publicada:</label></td>
                    <td>
                        <input type="radio" name="publicada" id="publicada1" value="y">SI
                        <input type="radio" name="publicada" id="publicada2" value="n">NO
                    </td>
                </tr>
                <tr>
                    <td><label for="fecha_publicacion">Fecha de la Publicacion:</label></td>
                    <td><input type="date" name="fecha_publicacion" id="fecha_publicacion"></td>
                </tr>
                <tr>
                    <td><label for="id_empresa">Empresa:</label></td>
                    <td>
                        <select name="id_empresa" id="id_empresa">
                            <option value="" selected disabled>--Seleccione una Empresa--</option>
                            <?php
                            $sql = "SELECT * FROM empresa";
                            try {
                                $statement = $conexion->prepare($sql);
                                $statement->execute();
                                $resultado = $statement->fetchAll();
                            } catch (PDOException $error) {
                                echo $error->getMessage();
                            }
                            foreach ($resultado as $fila) :
                                echo "<option value='" . $fila['Id'] . "'>" . $fila['Denominacion'] . "</option>";
                            endforeach;
                            ?>
                        </select>
                    </td>
                </tr>
            </table>
            <input type="submit" name="submit" value="Añadir" class="boton">
        </form>
    </main>

    <?php include_once "read.php"; ?>

</body>

</html>