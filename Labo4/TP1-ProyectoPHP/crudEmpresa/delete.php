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
        header('Location: create.php');
    } catch (PDOException $error) {
        $error->getMessage();
    }
}
?>

