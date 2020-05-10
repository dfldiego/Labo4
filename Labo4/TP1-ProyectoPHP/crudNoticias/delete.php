<?php  
require "../funciones/config.php";


/*2. Obtenemos el ID de la empresa que queremos eliminar por medio del parametro ID pasado por URL
en el punto 1 */
if(isset($_GET['id'])) {
    $sql = "DELETE FROM noticia 
            WHERE id = :id";

    try {
        $statementDelete = $conexion->prepare($sql);
        $statementDelete->bindValue(':id', $_GET['id']);
        $statementDelete->execute();
        header('Location: create.php');
    } catch (PDOException $error) {
        $error->getMessage();
    }
}
?>
