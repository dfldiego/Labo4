<?php  
require "../funciones/config.php";


/*2. Obtenemos el ID de la empresa que queremos eliminar por medio del parametro ID pasado por URL
en el punto 1 */
if(isset($_GET['Id'])) {
    $sql = "DELETE FROM empresa 
            WHERE Id = :Id";

    try {
        $statementDelete = $conexion->prepare($sql);
        $statementDelete->bindValue(':Id', $_GET['Id']);
        $statementDelete->execute();
    } catch (PDOException $error) {
        $error->getMessage();
    }
}

$sql = "SELECT * FROM empresa";

try {
    $statement = $conexion->prepare($sql);
    $statement->execute();
    $resultado = $statement->fetchAll();
} catch (PDOException $error) {
    echo $error->getMessage();
}
?>


<!--1. Seleccionar de la lista de empresas, clickeamos la que queremos eliminar
nos envia a esta misma pagina -->
<h2>Eliminar Empresa</h2>
<?php if (isset($statementDelete)) echo "Usuario Eliminado"; ?>
<table class="blueTable">
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
            <th>Eliminar</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($resultado as $fila) : ?>
            <tr>
                <?php $fila['Id']; ?>
                <td><?php echo $fila['Denominacion']; ?></td>
                <td><?php echo $fila['Telefono']; ?></td>
                <td><?php echo $fila['horario_atencion']; ?></td>
                <td><?php echo $fila['quienes_somos']; ?></td>
                <td><?php echo $fila['Latitud']; ?></td>
                <td><?php echo $fila['Longitud']; ?></td>
                <td><?php echo $fila['Domicilio']; ?></td>
                <td><?php echo $fila['Email']; ?></td>
                <td><a href="delete2.php?Id=<?php echo $fila['Id'] ?>">Eliminar</a></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>
<br>
<br>
<a href="create.php"><input type="submit" name="submitActualizar" value="Volver"></a>