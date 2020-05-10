<?php
require_once('../funciones/config.php');

if (isset($_GET["Id"])) {
  $sql = "SELECT * FROM empresa WHERE Id = :Id";

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
<footer>
    <section class="well">
        <div class="container">
            <p class="rights">
            <?php echo $empresa['Denominacion']; ?> &#169; <span id="copyright-year"></span>
                <a href="index-5.html">Privacy Policy</a>
                <!-- {%FOOTER_LINK} -->
            </p>
        </div>
    </section>
</footer>