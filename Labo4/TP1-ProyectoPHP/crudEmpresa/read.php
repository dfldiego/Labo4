<h2 class="fw-300 centrar-texto">Empresas añadidas</h2>
<?php
/*ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    */
require "../funciones/config.php";

if (isset($_POST['submit'])) {
    $sql = "SELECT * 
                FROM empresa";

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

<?php
//construiremos una tabla con un foreach
?>
<section >
<?php if (isset($_POST['submit'])) : ?>
    <?php if ($resultado && $statement->rowCount()) : ?>

        <table class="blueTable" style="width:75%; margin: 0 auto;">
            <thead>
                <tr>
                    <th>Denominacion</th>
                    <th>Telefono</th>
                    <th>Horario de Atencion</th>
                    <th>Quienes Somos</th>
                    <th>Latitud</th>
                    <th>Longitud</th>
                    <th>Domicilio</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($resultado as $fila) : ?>
                    <tr>
                        <td><?php echo $fila['Denominacion']; ?></td>
                        <td><?php echo $fila['Telefono']; ?></td>
                        <td><?php echo $fila['horario_atencion']; ?></td>
                        <td><?php echo $fila['quienes_somos']; ?></td>
                        <td><?php echo $fila['Latitud']; ?></td>
                        <td><?php echo $fila['Longitud']; ?></td>
                        <td><?php echo $fila['Domicilio']; ?></td>
                        <td><?php echo $fila['Email']; ?></td>
                        <td><a style="color:white" href="update-single.php?Id=<?php echo $fila['Id'] ?>">Editar</a></td>
                        <!--<td><a href="delete2.php"><input type="submit" name="submitEliminar" value="Eliminar"></a></td>-->
                        <td><a style="color:white" href="delete.php?Id=<?php echo $fila['Id'] ?>">Eliminar</a></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>

    <?php else : ?>
        <blockquote class="fw-300 centrar-texto">No hay empresas añadidas.</blockquote>
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