<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <meta name="format-detection" content="telephone=no" />
  <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
  <title>PRIVACY</title>

  <!-- Bootstrap -->
  <link href="css/bootstrap.css" rel="stylesheet" />

  <!-- Links -->
  <link rel="stylesheet" href="css/search.css" />

  <!--JS-->
  <script src="js/jquery.js"></script>
  <script src="js/jquery-migrate-1.2.1.min.js"></script>
  <script src="js/rd-smoothscroll.min.js"></script>
  <script src="js/device.min.js"></script>
</head>

<body>
  <div class="page">
    <?php

    include_once '../funciones/config.php';

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    
    $sql = "SELECT * FROM empresa WHERE Id = :Id";

    try {
      $statement = $conexion->prepare($sql);
      $statement->bindValue(':Id', $_SESSION['id_empresa']);
      $statement->execute();
      $empresa = $statement->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $error) {
      echo
        $error->getMessage();
    } ?>
    <!--========================================================
                            HEADER
        =========================================================-->
    <header>
    <?php
//print_r($_SESSION);
?>
      <div class="container top-sect">
        <div class="navbar-header">
          <h1 class="navbar-brand">
            <a data-type="rd-navbar-brand" href="./"><small> <?php echo $empresa['Denominacion']; ?> </small></a>
          </h1>
          <a class="search-form_toggle" href="#"></a>
        </div>

        <div class="help-box text-right">
          <p>Telefono</p>
          <a href="callto:#">
            <?php echo $empresa['Telefono']; ?>
          </a>
          <small><span>Horario:</span>
            <?php echo $empresa['horario_atencion']; ?></small>
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
    <!--========================================================
                            CONTENT
        =========================================================-->
    <?php
    if (isset($_GET['s'])) {
      $dato = $_GET['s'];
      $sql_consulta_noticia = "SELECT * FROM noticia 
      WHERE idEmpresa = {$empresa['Id']} 
      AND (titulo_noticia LIKE '%$dato%' OR resumen_noticia LIKE '%$dato%') 
      ORDER BY fecha_publicacion DESC";
      //echo $sql_consulta_noticia;
      try {
        $statement2 = $conexion->prepare($sql_consulta_noticia);
        $statement2->execute();
        $resultado_consulta_noticia = $statement2->fetchAll();
      } catch (PDOException $error2) {
        echo $error2->getMessage();
      }
    }
    ?>

    <main>
      <section class="well well4">
        <div class="container">
          <h2>
            Texto Buscado
          </h2>
          <div class="row offs2">
            <?php foreach ($resultado_consulta_noticia as $fila_consulta => $valor_consulta) : ?>
              <table width="90%" align="center">
                <tbody>
                  <tr>
                    <td>
                      <a href="detalle.php?id=<?php echo $valor_consulta['id']; ?>&Id=<?php echo $empresa['Id']; ?>">
                        <img style="max-width:250px;" height="250px" width="250px" class="imgNoticia" src="<?php echo $valor_consulta['imagen_noticia']; ?>" alt="" />
                      </a>
                    </td>
                    <td width="25"></td>
                    <td style="text-align:justify;" valign="top">
                      <a style="text-align:justify; font-size:20px" href="detalle.php?id=<?php echo $valor_consulta['id']; ?>&Id=<?php echo $empresa['Id']; ?>" class="banner">
                        <?php echo $valor_consulta['titulo_noticia']; ?>
                      </a>
                      <div class="verOcultar">
                        <?php echo $valor_consulta['resumen_noticia']; ?>
                        <a href="detalle.php?id=<?php echo $valor_consulta['id']; ?>&Id=<?php echo $empresa['Id']; ?>" style="color:blue">
                          Leer Mas - <?php echo $valor_consulta['fecha_publicacion']; ?>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
            <?php endforeach; ?>
          </div>
        </div>
      </section>
    </main>

    <!--========================================================
                            FOOTER
        =========================================================-->

    <footer>
      <section class="well">
        <div class="container">
          <p class="rights">
            <?php echo $empresa['Denominacion']; ?>
            &#169; <span id="copyright-year"></span>
            <a href="index-5.html">Privacy Policy</a>
            <!-- {%FOOTER_LINK} -->
          </p>
        </div>
      </section>
    </footer>
  </div>

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="js/bootstrap.min.js"></script>
  <script src="js/tm-scripts.js"></script>
  <!-- </script> -->

  <!-- coded by vitlex -->
</body>

</html>