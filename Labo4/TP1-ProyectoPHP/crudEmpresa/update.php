<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualiza Empresa</title>
    <link rel="stylesheet" href="css/estilosCRUD.css">
</head>

<body>
    <?php
    //mostrar todos las empresas que hay en la BBDD

    require "../funciones/config.php";

    $sql = "SELECT * FROM empresa";

    try {
        $statement = $conexion->prepare($sql);
        $statement->execute();
        $resultado = $statement->fetchAll();
    } catch (PDOException $error) {
        echo $error->getMessage();
    }
    ?>
    <h2 class="fw-300 centrar-texto">Editar Empresa</h2>
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
                <th>Editar</th>
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
                    <td><a href="update-single.php?Id=<?php echo $fila['Id'] ?>">Editar</a></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <br>
    <br>
    <a href="create.php"><input type="submit" name="submitActualizar" value="Volver"></a>

</body>

</html>