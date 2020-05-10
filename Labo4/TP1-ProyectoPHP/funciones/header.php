<?php
    $_SESSION['id_empresa'];
    include_once '../funciones/config.php';

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
      echo "Se necesita un Id en el header";
      exit;
    }
    
    ?>
<header>
<?php
//print_r($_SESSION);
?>
    <div class="container top-sect">
        <div class="navbar-header">
            <h1 class="navbar-brand">
                <a data-type='rd-navbar-brand' href="./"><small style="color:white;"> <?php echo $empresa['Denominacion']; ?> </small></a>
            </h1>
            <a class="search-form_toggle" href="#"></a>
        </div>

        <div class="help-box text-right">
            <p>Telefono</p>
            <a href="callto:#"><?php echo $empresa['Telefono']; ?></a>
            <small><span>Horario:</span> <?php echo $empresa['horario_atencion']; ?></small>
        </div>
    </div>

    <div id="stuck_container" class="stuck_container">
        <div class="container">

            <form class="search-form" action="buscador.php" method="GET" accept-charset="utf-8">
                <label class="search-form_label">
                    <input class="search-form_input" type="text" name="s" autocomplete="off" placeholder="" />
                    <span class="search-form_liveout"></span>
                </label>
                <button class="search-form_submit fa-search" type="submit"></button>
            </form>

        </div>

    </div>

</header>