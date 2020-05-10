<?php
require_once("../funciones/config.php");

$sql = "SELECT * FROM empresa";
try {
    $statement = $conexion->prepare($sql);
    $statement->execute();
    $resultado = $statement->fetchAll();
} catch (PDOException $error) {
    echo $error->getMessage();
}

?>

<table width="50%" align="center">
    <thead>
        <tr>
            <td width="50%">
                <b>EMPRESA</b>
            </td>
            <td>
                <b>VER PAGINA</b>
            </td>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($resultado as $fila => $valor) : ?>
            <tr>
                <td>
                    <?php echo $valor['Denominacion']; ?>
                </td>
                <td>
                    <a style="color:blue; text-decoration:none;" href="home.php?Id=<?php echo $valor['Id'] ?>">acceder a <?php echo $valor['Denominacion']; ?></a>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>