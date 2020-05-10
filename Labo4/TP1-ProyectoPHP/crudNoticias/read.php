<h2 class="fw-300 centrar-texto">Noticias añadidas</h2>
<?php
/*ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    */
require "../funciones/config.php";

if (isset($_POST['submit'])) {
    $sql = "SELECT * FROM noticia";

    try {
        $statement = $conexion->prepare($sql);
        //bindParam: para la sentencia anterior, vincular la variable $_POST['denominacion'] al param :denominacion
        //          dentro de la sentencia sql el param :denominacion = $_POST['denominacion'] introducido en el form
        //otra opcion pasar un array al execute() pero como solo tenemos un param, esta forma es mas rapida.
        //$statement->bindParam(':denominacion', $_POST['denominacion'], PDO::PARAM_STR);
        $statement->execute();

        //fethAll(): Aqui guardamos todas las filas de la query
        $resultado = $statement->fetchAll();
    } catch (PDOException $error) {
        echo $error->getMessage();
    }
}
?>

<section >
<?php if (isset($_POST['submit'])) : ?>
    <?php if ($resultado && $statement->rowCount()) : ?>

        <table class="blueTable" style="width:75%; margin: 0 auto;">
            <thead>
                <tr>
                    <th>Titulo de la Noticia:</th>
                    <th>Resumen de la Noticia:</th>
                    <th>Imagen de la Noticia:</th>
                    <th>Contenido HTML:</th>
                    <th>Publicada:</th>
                    <th>Fecha de la Publicacion:</th>
                    <th>Empresa:</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($resultado as $fila) : ?>
                    <tr>
                        <td><?php echo $fila['titulo_noticia']; ?></td>
                        <td><?php echo $fila['resumen_noticia']; ?></td>
                        <td><?php echo $fila['imagen_noticia']; ?></td>
                        <td><?php echo $fila['contenido_html']; ?></td>
                        <td><?php echo $fila['publicada']; ?></td>
                        <td><?php echo $fila['fecha_publicacion']; ?></td>
                        <td>
                            <?php 
                            //echo $fila['idEmpresa'];
                            $sql_empresa = "SELECT * FROM empresa";
                            
                            try {
                                $statement = $conexion->prepare($sql_empresa);
                                $statement->execute();
                                $resultado_empresa = $statement->fetchAll();
                            } catch (PDOException $error) {
                                echo $error->getMessage();
                            }
                            foreach ($resultado_empresa as $fila_empresa) :
                                if($fila['idEmpresa'] == $fila_empresa['Id']):
                                    echo $fila_empresa['Denominacion'];
                                endif;
                            endforeach;
                            ?>
                        </td>
                        <td><a style="color:white" href="update.php?id=<?php echo $fila['id'] ?>">Editar</a></td>
                        <!--<td><a href="delete2.php"><input type="submit" name="submitEliminar" value="Eliminar"></a></td>-->
                        <td><a style="color:white" href="delete.php?id=<?php echo $fila['id'] ?>">Eliminar</a></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>

    <?php else : ?>
        <blockquote class="fw-300 centrar-texto">No hay noticias añadidas.</blockquote>
    <?php endif; ?>
<?php endif; ?>
</section>
<section class="contenedor seccion contenido-centrado">
    <form method="POST">
        <table>
            <tr>
                <td><input type="submit" name="submit" value="Mostrar" class="boton"></td>
            </tr>
        </table>
    </form>
</section>